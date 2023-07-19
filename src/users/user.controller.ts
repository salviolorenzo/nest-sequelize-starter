import { Controller, Get, Injectable, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':userId/accounts')
  async getUserAccounts(@Param('userId') userId: string) {
    const accounts = await this.userService.getUserAccounts(userId);
    return accounts;
  }
}
