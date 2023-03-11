import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  IsEmail,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @ApiProperty({ example: 1 })
  @PrimaryKey
  @AutoIncrement
  @Column
  user_id: number;

  @ApiProperty({ example: 'johndoe@example.com' })
  @IsEmail
  @AllowNull(false)
  @Column
  email: string;

  @ApiProperty({ example: 'password123' })
  @AllowNull(false)
  @Column
  password: string;

  @ApiProperty({ example: 'johndoe' })
  @AllowNull(false)
  @Column
  username: string;

  @ApiProperty({ example: 'John' })
  @AllowNull(false)
  @Column
  first_name: string;

  @ApiProperty({ example: 'Doe' })
  @AllowNull(false)
  @Column
  last_name: string;

  @ApiProperty({ example: '+1-555-123-4567' })
  @AllowNull(false)
  @Column
  phone_number: string;
}
