import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendService {
    constructor(private prisma: PrismaService){}

    async getallfriends(param: string) {
        const id: number = parseInt(param)
        const friends1 = await this.prisma.friend.findMany({
            where: {
                userId: id
            }
        })
        const friends2 = await this.prisma.friend.findMany({
            where: {
                friendId: id
            }
        })
        friends2.map((data:any)=> {
            let tmp:any
            tmp = data.userId
            data.userId = data.friendId 
            data.friendId  = tmp
        })
        const friends = friends1.concat(friends2)
        return {info: friends}
    }


    async createfriend(userId: string, friendId: string) {
        const friend = await this.prisma.friend.create({
            data: {
                userId: parseInt(userId),
                friendId: parseInt(friendId),
            }
        })
        return {info: friend}
    }
}
