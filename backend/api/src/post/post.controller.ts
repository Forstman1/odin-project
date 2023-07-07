import { Body, Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { Request } from 'express';

@Controller('post')
export class PostController {
    constructor(private postservice: PostService) {}

    @Get('getallpost/:id')
    getposts(@Param('id') id: number) {
        return this.postservice.getposts(id)
    }
    
    @Post('addpost')
    addpost(@Body() body) {
        return this.postservice.addpost(body)
    }

    @Patch('updatepost')
    updatepost(@Body() body) {
        return this.postservice.updatepost(body)
    }
}
