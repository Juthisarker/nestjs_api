import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Query,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserViewService } from './user-view.service';

@Controller('user-view')
export class UserViewController {
  constructor(private userViewService: UserViewService) {}

//   @Get('/:id')
//   findUser(@Param('id') id: string) {
//     return this.userViewService.findOne(parseInt(id));
//   }

  @Get()
  findAllUsers() {
    return this.userViewService.find();
  }
}
