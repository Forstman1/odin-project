import { Module } from '@nestjs/common';
import { FriendrequestController } from './friendrequest.controller';
import { FriendrequestService } from './friendrequest.service';
import { FriendModule } from 'src/friend/friend.module';
import { FriendController } from 'src/friend/friend.controller';
import { FriendService } from 'src/friend/friend.service';

@Module({
  imports: [FriendModule],
  controllers: [FriendrequestController, FriendController],
  providers: [FriendrequestService, FriendService]
})
export class FriendrequestModule {}
