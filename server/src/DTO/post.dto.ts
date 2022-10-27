import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class PostDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsInt()
  @Min(0)
  authorId: string;
}
