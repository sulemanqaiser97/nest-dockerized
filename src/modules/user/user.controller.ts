import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';
import { DeleteUserResponse } from './dto/delete-user-response.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('all')
  @ApiResponse({
    status: 200,
    description: 'Returns list of all users.',
    type: [User],
  })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The user has been found',
    type: User,
  })
  @ApiResponse({
    status: 404,
    description: 'User with given id does not exists.',
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The user details have been updated.',
    type: User,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({
    status: 404,
    description: 'User with given id does not exists.',
  })
  @ApiBody({ type: UpdateUserDto })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully removed.',
    type: DeleteUserResponse,
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({
    status: 404,
    description: 'User with given id does not exists.',
  })
  remove(@Param('id') id: string) {
    const operation = this.userService.remove(+id);
    if (operation) return { status: 'deleted' };
  }
}
