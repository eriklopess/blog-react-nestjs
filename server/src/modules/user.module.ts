import { UserController } from './../controllers/user.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { userProviders } from 'src/providers/user.provider';
import { UserService } from './../services/user.service';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders, UserService],
  controllers: [UserController],
})
export class UserModule {}
