import { Controller, Get, Req } from '@nestjs/common';
import { TokenService } from './token.service';
import { Request } from 'express';



@Controller('token')
export class TokenController {
    constructor(private tokenService: TokenService) {}


    @Get('checkvalid')
    checkToken(@Req() req: Request) {
        return this.tokenService.checkToken(req.headers.authorization)
    }
}
