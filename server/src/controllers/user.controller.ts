import { User } from 'src/entities/user.entity';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from 'src/services/user.service';
import { UserDTO } from 'src/DTO/user.dto';

export enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() userDTO: UserDTO): Promise<User> {
    return this.userService.create(userDTO);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: User): Promise<User> {
    return this.userService.update(id, body);
  }
}
