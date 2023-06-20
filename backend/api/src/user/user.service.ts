import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma, PrismaClient } from '@prisma/client';
import { JwtPayload } from 'jsonwebtoken';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {
    constructor (private prisma: PrismaService, private jwt: JwtService, private config: ConfigService) {}


    

}
