import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SetInfoModule } from './set-info/set-info.module';
import { AuthModule } from './auth/auth.module';
import { SocialModule } from './social/social.module';

@Module({
  imports: [UserModule, SetInfoModule, AuthModule, SocialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
