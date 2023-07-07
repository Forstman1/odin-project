import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LikeService {
    constructor(private prisma: PrismaService){}

    

    async likestatus (postId: string, userId: string) {
        try {

            const like = await this.prisma.like.findUnique({
                where: {
                  userId_postId: {
                    userId: parseInt(userId),
                    postId: parseInt(postId),
                  },
                },
            })
            if (like)
                return true
            return false
        } catch (error)
        {
            console.log(error)
            return false
        }
    }

    async allLikes (postId: string)
    {
        try {

        const likes = await this.prisma.like.findMany({
            where: {
                postId: parseInt(postId),
            },
        })
        return likes
    } catch (error) {
        console.log(error)
        return false
    }
}

    async handelike (postId: string, userId: string) {
        try {

            return this.prisma.like.create({
                data: {
                  user: {
                    connect: { id: parseInt(userId) },
                  },
                  post: {
                    connect: { id: parseInt(postId) },
                  },
                },
              });
        }
        catch (error)
        {
            console.log(error)
        }
    }

    async handelunlike (postId: string, userId: string) {
        try {

            return this.prisma.like.delete({
                where: {
                    userId_postId: {
                        userId: parseInt(userId),
                        postId: parseInt(postId),
                      },
                    },
              });
        }
        catch (error)
        {
            console.log(error)
        }
    }
}
