import { Body, Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserService } from './user.service';




@Controller('users')
export class UserController {
    constructor(private userservice: UserService) {}


    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getMe(@Req() req: Request) {
        console.log(req.user) 
        return req.user
    }

    @Get('/allusers')
    getallusers(@Body() body: any) {
        return this.userservice.getallusers(body)
    }


    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userservice.getUser(id)
    }
}

 