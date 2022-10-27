import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from '../DTO/user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private repository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  create(user): Promise<User> {
    return this.repository.save(user);
  }

  findOne(id: string | number): Promise<User> {
    return this.repository.findOne({ where: { id: Number(id) } });
  }

  private async updateData(id: string, user: UserDTO): Promise<User> {
    const userOldData = await this.findOne(id);
    const userNewData = Object.assign(userOldData, user);
    await this.repository.save(userNewData);
    return userNewData;
  }

  async update(id: string, user: UserDTO) {
    try {
      return this.updateData(id, user);
    } catch (error) {
      console.log(error);
    }
  }
}
