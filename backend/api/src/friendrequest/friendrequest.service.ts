import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FriendrequestService {
    constructor(private prisma: PrismaService){}

    async createfriendrequest(data: any) {
        try {
            if (data.receiver === data.requester)
                throw new ForbiddenException("you cannot add yourself")
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
}
