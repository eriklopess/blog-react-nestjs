import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsIn,
  MinLength,
} from 'class-validator';

export class UserDTO {
  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsIn(['admin', 'user'])
  role: string;
}
