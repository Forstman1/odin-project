import { Module } from '@nestjs/common';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [JwtModule.register({}), ConfigModule],
    controllers: [ TokenController],
    providers: [TokenService, JwtService]
})
export class TokenModule {}
