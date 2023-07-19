import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'sequelize/models/user.model';
import { PlaidService } from 'src/plaid/plaid.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
    private plaidService: PlaidService,
  ) {}

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOneById(id: number): Promise<User | null> {
    return this.userModel.findOne({ where: { id } });
  }

  async deleteById(id: number): Promise<void> {
    const user = await this.findOneById(id);
    await user.destroy();
  }
  async getUserAccounts(userId: string) {
    return await this.plaidService.getUserAccounts(userId);
  }
}
