import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  async test(): Promise<string> {
    try {
      return this.appService.getHello();
    } catch (id) {
      // TODO
    }
  }
}
