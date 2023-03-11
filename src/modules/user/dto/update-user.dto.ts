import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'johndoe' })
  username?: string;

  @ApiProperty({ example: 'John' })
  first_name?: string;

  @ApiProperty({ example: 'Doe' })
  last_name?: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  email?: string;

  @ApiProperty({ example: 'password123' })
  password?: string;

  @ApiProperty({ example: '+1-555-123-4567' })
  phone_number?: string;
}
