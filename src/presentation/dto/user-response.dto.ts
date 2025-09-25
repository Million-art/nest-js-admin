import { Roles } from 'src/domain/interfaces/enums';

export class UserResponseDto {
  id: string;
  name: string;
  email: string;
  role: Roles;
  isActive: boolean;
}