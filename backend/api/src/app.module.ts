import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/users.service';
import { UserController } from './users/users.controller';


@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})

export class AppModule {}
