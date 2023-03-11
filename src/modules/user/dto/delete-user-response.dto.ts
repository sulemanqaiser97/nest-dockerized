import { ApiProperty } from '@nestjs/swagger';

export class DeleteUserResponse {
  @ApiProperty({ example: 'deleted' })
  status: string;
}
