import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers(): string {
    return 'Hello from users controllers Get request!';
  }

  createUsers(): string {
    return 'Hello from users controllers Post request!';

  }
}
