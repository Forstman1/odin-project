import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { TokenModule } from './token/token.module';
import { PostModule } from './post/post.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import { FriendModule } from './friend/friend.module';
import { FriendrequestModule } from './friendrequest/friendrequest.module';


@Module({
  imports: [AuthModule,
            UserModule, 
            PrismaModule,
            ConfigModule.forRoot({}), TokenModule, PostModule, LikeModule, CommentModule, FriendModule, FriendrequestModule],
})


export class AppModule {}

