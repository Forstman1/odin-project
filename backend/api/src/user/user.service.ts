import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma, PrismaClient } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';

interface DecodedToken extends JwtPayload {
    id: number;
    username: string;
    email: string;
}

@Injectable()
export class UserService {
    constructor (private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {
        console.log('JWT_SECRET:', this.config.get('JWT_SECRET'));
        
    }


    async checkToken (token: string) {

        let decodedToken = this.jwt.decode(token.split(" ")[1]) as DecodedToken;
        if (decodedToken.exp < Date.now() / 1000) {
            console.log('Token expired');
            return false;
        }
        const isValid = this.jwt.verify(token.split(" ")[1], this.config.get('JWT_SECRET'));
        console.log(token) 
        return "true";
    }

}
