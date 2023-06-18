import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({}), ConfigModule],
  controllers: [UserController],
  providers: [UserService, JwtService]
})
export class UserModule {}
