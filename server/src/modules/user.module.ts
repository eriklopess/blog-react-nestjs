import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { userProviders } from 'src/providers/user.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...userProviders],
})
export class UserModule {}
