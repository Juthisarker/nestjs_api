import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { User } from './users/user.entity';
import { UserView } from './user-view/userView.entity';
import { Report } from './reports/report.entity';
import { UserViewModule } from './user-view/user-view.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dv.sqlite',
      entities: [User, Report, UserView],
      synchronize: true,
    }),
    UsersModule,
    ReportsModule,
    UserViewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
