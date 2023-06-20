import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { TokenModule } from './token/token.module';


@Module({
  imports: [AuthModule,
            UserModule, 
            PrismaModule, 
            ConfigModule.forRoot({}), TokenModule],
})


export class AppModule {}

