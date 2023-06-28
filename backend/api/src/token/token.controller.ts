import { Controller, Get, Req } from '@nestjs/common';
import { TokenService } from './token.service';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';


interface DecodedToken extends JwtPayload {
    id: number;
    username: string;
    email: string;
    valid: boolean;
}



@Controller('token')
export class TokenController {
    constructor(private tokenService: TokenService) {}


    @Get('checkvalid')
    checkToken(@Req() req: Request) : Promise<DecodedToken> {
        return this.tokenService.checkToken(req.headers.authorization)
    }
}
