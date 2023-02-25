import { Body, Controller, Param, Post, Get, Query, Delete, Patch } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {}
    @Post('/value')
    createUser(@Body() body: any) {
      this.reportsService.create(body.price, body.password);
    }

}
