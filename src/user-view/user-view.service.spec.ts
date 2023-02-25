import { Test, TestingModule } from '@nestjs/testing';
import { UserViewService } from './user-view.service';

describe('UserViewService', () => {
  let service: UserViewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserViewService],
    }).compile();

    service = module.get<UserViewService>(UserViewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
