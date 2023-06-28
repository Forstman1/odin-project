import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';

interface DecodedToken extends JwtPayload {
    id: number;
    username: string;
    email: string;
    valid: boolean;
}


@Injectable()
export class TokenService {
    constructor (private jwt: JwtService, private config: ConfigService){}

    async checkToken (token: string) : Promise<DecodedToken> {
        try {

            let decodedToken = this.jwt.decode(token.split(" ")[1]) as DecodedToken;
            if (decodedToken.exp < Date.now() / 1000) {
                console.log('Token expired');
                decodedToken.valid = false
                return decodedToken;
            }
            decodedToken.valid = true;
            
            return decodedToken;
        }
        catch (error)
        {
            let decodedToken: DecodedToken;
            decodedToken.valid = false;
            return decodedToken 
        }
        // const isValid = this.jwt.verify(token.split(" ")[1], this.config.get('JWT_SECRET'));
        // console.log(token) 
    }


}
