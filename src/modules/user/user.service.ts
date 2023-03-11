import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly user: typeof User,
  ) {}

  async checkUserExists(userId: number): Promise<boolean> {
    const user = await this.user.findOne({ where: { user_id: userId } });
    return !!user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    return await this.user.create({ ...createUserDto });
  }

  async findAll() {
    return await this.user.findAll();
  }

  async findOne(id: number) {
    const user = await this.user.findOne({ where: { user_id: id } });
    if (user) {
      return user;
    } else {
      throw new NotFoundException(`User with id ${id} does not exists.`);
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.user.findByPk(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} does not exists.`);
    }

    return await user.update(updateUserDto);
  }

  async remove(id: number) {
    const isUserExists = await this.checkUserExists(id);
    if (!isUserExists) {
      throw new NotFoundException(`User with id ${id} does not exists.`);
    }

    return await this.user.destroy({
      where: { user_id: id },
    });
  }
}
