import { UserEntity } from "../entities/user.entity";

export interface UserRepository {
  save(user: UserEntity): Promise<UserEntity>;
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  findAll(): Promise<UserEntity[]>;
  delete(id: string): Promise<void>;
}
