import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
    constructor(private prisma: PrismaService){}


    async createcomment (postId: string, userId: string, comment: string) {
        try {
            const res = await this.prisma.comment.create({
                data: {
                    user: {
                      connect: { id: parseInt(userId) },
                    },
                    post: {
                      connect: { id: parseInt(postId) },
                    },
                    comment: comment,
                  },
            })

            return res

        } catch (error) {
            console.log(error)
            return error

        }
    }


    async getComments (postId: string): Promise<any> {
        try {
            const comments = await this.prisma.comment.findMany({
                where: {
                    postId: parseInt(postId)
                }
            })

            return comments

        } catch (error) {

            console.log(error)
            return error
        }
    }
}
