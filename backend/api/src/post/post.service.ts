import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PostService {
    constructor(private prisma: PrismaService) {}

    async getposts(userId: any): Promise<any> {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: parseInt(userId)
                }
            })
            const allposts = await this.prisma.post.findMany({
                where:{
                    user:{
                        id: parseInt(userId),
                    }
                }
            })
            return allposts
        } catch (error)
        {
            console.error(error)
            return {info: "not found "}

        }
    }

    
    async addpost(data: any): Promise<any>   {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: parseInt(data.userId),
                }
            })
            if (!user)
                throw new ForbiddenException("no user was matched")

            const post = await this.prisma.post.create({
                data: {
                    description: data.post ,
                    user: {
                        connect: { id: parseInt(data.userId) },
                      },
                },
            })
            return {info: post}
        }
        catch (error)
        {
            console.error(error)
            return {info: "not found "}
        }
    }


    async updatepost(data: any): Promise<any>   {
        try {
            
            return {info: data}
        }
        catch (error)
        {
            console.error(error)
            return {info: "not found "}
        }
    }
}
