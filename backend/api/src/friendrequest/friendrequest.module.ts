import { Module } from '@nestjs/common';
import { FriendrequestController } from './friendrequest.controller';
import { FriendrequestService } from './friendrequest.service';

@Module({
  controllers: [FriendrequestController],
  providers: [FriendrequestService]
})
export class FriendrequestModule {}
