import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
    constructor(private commentservice: CommentService){}

    @Post('create')
    create(@Body() body: any) {
        return this.commentservice.createcomment(body.postId, body.userId, body.comment)
    }

    @Get('/getallcomments/:postId')
    getComments(@Param('postId') postId: string) {
        return this.commentservice.getComments(postId)
    }

}
