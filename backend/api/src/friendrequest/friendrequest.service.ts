import { ForbiddenException, Injectable } from '@nestjs/common';
import { FriendService } from 'src/friend/friend.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendrequestService {
    constructor(private prisma: PrismaService, private friendservice: FriendService){}

    async createfriendrequest(data: any) {
        try {
            if (data.receiver === data.requester)
                throw new ForbiddenException("you cannot add yourself")
            const friend1 = await this.prisma.friend.findMany({
                where: {
                    userId: parseInt(data.receiver),
                    friendId: parseInt(data.requester)
                }
            })

            const friend2 = await this.prisma.friend.findMany({
                where: {
                    userId: parseInt(data.requester),
                    friendId: parseInt(data.receiver)
                }
            })
            let friends = friend1.concat(friend2)
            if (friends[0] != undefined)
                throw new ForbiddenException("already friends")


            console.log(friends, "ana hna")

            const friendrequest: any = await this.prisma.friendrequest.create({
                data: {
                  status: data.status,
                  requester: {
                    connect: { id: parseInt(data.requester) },
                  },
                  receiver: {
                    connect: { id: parseInt(data.receiver) },
                  },
                } 
              });
              return friendrequest
        } catch (error) {
            console.log(error)
            return error
        }
    } 

    async Deletefriendrequest(data: any) {
        try {
            if (data.receiver === data.requester)
                throw new ForbiddenException("you cannot delete yourself")

            const friendrequest = await this.prisma.friendrequest.findMany({
                where: {
                    requesterId: parseInt(data.requester),
                    recipientId: parseInt(data.receiver)
                }
            })
            await this.prisma.friendrequest.delete({
                where: {
                    id: friendrequest[0].id
                }
            })
 
            return friendrequest
        } catch (error) {
            console.log(error)
            return error
        }
    } 

    async updatefriendrequest(data: any) {
        try {

            const friendrequest = await this.prisma.friendrequest.findMany({
                where: {
                    requesterId: parseInt(data.requester),
                    recipientId: parseInt(data.receiver)
                }
            })

            friendrequest[0].status = data.status
              return friendrequest
        } catch (error) {
            console.log(error)
            return error
        }
    }

    async getfriendrequestdata(requester: string, receiver: string) {
        try {
            const data: any = await this.prisma.friendrequest.findMany({
                where: {
                    requesterId: parseInt(requester),
                    recipientId: parseInt(receiver)
                }
            })
            if (data.length != 0)
                return {status: true}

            return {status: false}
        } catch (error) {
            return {status: false}
        }
    
    }

    async getreceiverdata(receiver: string)
    {
        try {
            const data: any = await this.prisma.friendrequest.findMany({
                where: {
                    recipientId: parseInt(receiver)
                }
            })


            return {info: data}
        } catch (error) {
            return error
        }
    }

    async approvefriendrequest(body: any)
    {
        try {
            
            const friendrequest: any = await this.prisma.friendrequest.findUnique({
                where: {
                    id: parseInt(body.id)
                }
            })
            console.log(friendrequest + " ----- ")

            const friend = await this.friendservice.createfriend(body.userId, body.friendId)
            console.log(friend.info + " ----- ")

            await this.Deletefriendrequest({requester: friendrequest.requesterId, receiver: friendrequest.recipientId})
            return {friend}
        } catch (error) {
            return error
        }
    }

}
