import { Body, Controller, Get, Patch, Post, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { Request } from 'express';

@Controller('post')
export class PostController {
    constructor(private postservice: PostService) {}

    @Get('getallpost')
    getposts(@Body() body) {
        return this.postservice.getposts(body)
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
