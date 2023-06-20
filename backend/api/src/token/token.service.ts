import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
    id: number;
    username: string;
    email: string;
}


@Injectable()
export class TokenService {
    constructor (private jwt: JwtService, private config: ConfigService){}

    async checkToken (token: string) {
        try {

            let decodedToken = this.jwt.decode(token.split(" ")[1]) as DecodedToken;
            if (decodedToken.exp < Date.now() / 1000) {
                console.log('Token expired');
                return false;
            }
            return true;
        }
        catch (error)
        {
            // console.error(error)
            return false;
        }
        // const isValid = this.jwt.verify(token.split(" ")[1], this.config.get('JWT_SECRET'));
        // console.log(token) 
    }


}
