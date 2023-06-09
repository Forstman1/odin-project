import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';



@Controller('users')
export class UserController {


    @UseGuards(AuthGuard('jwt'))
    @Get('me')
    getMe(@Req() req: Request) {
        console.log(req.user)
        return req.user
    }


    @Get(':id')
    getUser(@Param('id') id: number) {
        return "ha wa7ed user " + id
    }
}

