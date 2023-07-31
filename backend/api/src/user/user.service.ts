import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma, PrismaClient } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
    constructor (private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}


    async getUser(id: string) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: parseInt(id),
                }
            })
            if (!user)
                throw new ForbiddenException("no user was matched")
            delete user.password
            return {info: user}
        }
        catch (error)
        {
            console.error(error)
            return {info: "not found"}
        }
    }

    async getallusers(body: any)
    {
        try {
            const user = await this.prisma.user.findMany()
            if (!user)
                throw new ForbiddenException("no user was matched")
            return {info: user}
        }
        catch (error)
        {
            console.error(error)
            return {info: "no users found"}
        }
    }

}
