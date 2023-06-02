import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './users.service';



@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  getUsers(): string {
    return this.userService.getUsers();
  }
  @Post('')
  createUsers() : string {
    return this.userService.createUsers();
  }
}
 