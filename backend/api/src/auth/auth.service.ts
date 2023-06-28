import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { User } from "@prisma/client";





@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}



    async signup (dto: AuthDto) {
        try {
            const hash = await argon.hash(dto.password); 
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    password: hash,
                    firstName: dto.firstname,
                    lastName: dto.lastname
                }
            })
            console.log("ana hna signup")
            return this.signToken(user);
        } catch (error) {
            return { "error": error }
        }
    }



    async signin(dto: AuthDto) {
        
        try {
            const user =  await this.prisma.user.findUnique({
                where: {
                    email: dto.email,
                },
            }
            )
            console.log(user)
            if (!user)
                throw new ForbiddenException("incorrect credentials");


            const pwMatches = await argon.verify(user.password, dto.password);
            
            
            if (!pwMatches)
                throw new ForbiddenException("incorect credentials");

            return this.signToken(user);
        }
        catch (error)
        {
            console.log(error)
            return error
        }
        
    }

    async signToken(user: User) : Promise<{access_token: string}>
    {
        const payload = {
            sub: user.id,
            email: user.email,
            firstname: user.firstName,
            lastname: user.lastName,
            createAt: user.creatAt

        }
        const secret = this.config.get('JWT_SECRET')

        const tokenJdid = await this.jwt.signAsync(payload, {
            expiresIn: '7d',
            secret: secret,
        })
        return {access_token: tokenJdid}
    }

}