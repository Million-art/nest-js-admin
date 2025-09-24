import { IsEnum, IsString } from 'class-validator';
import { Roles } from 'src/domain/interfaces/enums';

export class UpdateUserDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  email: string;

  @IsEnum(Roles)
  role: Roles;
}
