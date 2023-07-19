import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlaidItem } from 'sequelize/models/plaid-item.model';
import { User } from 'sequelize/models/user.model';
import { PlaidService } from 'src/plaid/plaid.service';

@Module({
  imports: [SequelizeModule.forFeature([User, PlaidItem])],
  providers: [UserService, PlaidService],
  controllers: [UserController],
})
export class UsersModule {}
