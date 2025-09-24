import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract save(user: UserEntity): Promise<UserEntity>;
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract findByEmail(email: string): Promise<UserEntity | null>;
  abstract findAll(): Promise<UserEntity[]>;
  abstract softDelete(id: string): Promise<void>;
}
