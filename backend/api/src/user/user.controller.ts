import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
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

    @Get('token')
    checkToken(@Req() req: Request) {
        return this.userservice.checkToken(req.headers.authorization)
    }


    @Get(':id')
    getUser(@Param('id') id: number) {
        return "ha wa7ed user " + id
    }
}

 