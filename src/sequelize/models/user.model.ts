import { Column, HasMany, Table } from 'sequelize-typescript';
import { BaseModel } from './base.model';
import { PlaidItem } from './plaid-item.model';

@Table
export class User extends BaseModel {
  @Column({ field: 'first_name' })
  firstName: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column({ field: 'is_active', defaultValue: true })
  isActive: boolean;

  @HasMany(() => PlaidItem)
  items: PlaidItem[];
}
