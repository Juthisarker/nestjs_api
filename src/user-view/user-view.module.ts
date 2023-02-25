import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserViewService } from './user-view.service';
import { UserViewController } from './user-view.controller';
import { UserView } from './userView.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserView])],
  providers: [UserViewService],
  controllers: [UserViewController]
})
export class UserViewModule {}
