import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FriendrequestService } from './friendrequest.service';


@Controller('friendrequest')
export class FriendrequestController {
    constructor(private friendrequestservice: FriendrequestService){}


    @Get('/getdata/:requester/:receiver')
    getfriendrequestdata(@Param('requester') requester: string, @Param('receiver') receiver: string) {
        return this.friendrequestservice.getfriendrequestdata(requester, receiver)
    }


    @Get('/getdata/:receiver')
    getreceiverdata(@Param('receiver') receiver: string) {
        return this.friendrequestservice.getreceiverdata(receiver)
    }


    @Post('/newfriendRequest')
    createfriendrequest(@Body() body: any) {
        console.log(body.requester, " ", body.receiver)
        return this.friendrequestservice.createfriendrequest(body)
    }

    @Post('/approvefriendrequest')
    approvefriendrequest(@Body() body: any) {
        return this.friendrequestservice.approvefriendrequest(body)
    }

    @Put('/updatefriendrequest')
    updatefriendrequest(@Body() body: any) {
        return this.friendrequestservice.updatefriendrequest(body)
    }

    @Delete('/deletefriendrequest')
    deletefriendrequest(@Body() body:any) {
        return this.friendrequestservice.Deletefriendrequest(body);
    }

}
