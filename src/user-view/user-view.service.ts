import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserView } from './userView.entity';

@Injectable()
export class UserViewService {
  constructor(@InjectRepository(UserView) private repo: Repository<UserView>) {}

  find() {
    return this.repo.find();
  }
}