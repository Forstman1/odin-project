import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendService {
    constructor(private prisma: PrismaService){}

    async getallfriends(param: string) {
        const id: number = parseInt(param)
        const friends = await this.prisma.friend.findMany({
            where: {
                userId: id
            }
        })
        return {info: friends}
    }
}
