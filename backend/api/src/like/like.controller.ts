import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { LikeService } from './like.service';

@Controller('like')
export class LikeController {
    constructor(private likeservice:LikeService){}


    @Get('/likestatus/:postId/:userId')
    async likestatus(@Param('postId') id1: string, @Param('userId') id2: string)
    {
        return this.likeservice.likestatus(id1, id2)
    }
    @Get('/all/:id')
    async all(@Param('id') id: string)
    {
        return this.likeservice.allLikes(id)
    }
    @Post('/likepost/:id')
    async create(@Param('id') id: string, @Body() body: any)
    {
        return this.likeservice.handelike(id, body.userId)
    }


    @Delete('/unlikepost/:id')
    delete(@Param('id') id: string, @Body() body: any)
    {
        return this.likeservice.handelunlike(id, body.userId)

    }
}
