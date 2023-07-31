import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FriendService } from './friend.service';

@Controller('friend')
export class FriendController {
    constructor(private friendservice: FriendService){}

    @Get('/getfriends/:id')
    getter(@Param('id') id: string) {
        return this.friendservice.getallfriends(id)
    }

    @Post('/addfriend')
    addfriend(@Body() body: any) {
        
    }
}
