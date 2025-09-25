import { IsEmail, IsEnum, IsString } from 'class-validator';
import { Roles } from 'src/domain/interfaces/enums';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Roles)
  role: Roles;
}
