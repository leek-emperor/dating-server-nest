import { Module } from '@nestjs/common';
import { SetInfoService } from './set-info.service';
import { SetInfoController } from './set-info.controller';

@Module({
  controllers: [SetInfoController],
  providers: [SetInfoService]
})
export class SetInfoModule {}
