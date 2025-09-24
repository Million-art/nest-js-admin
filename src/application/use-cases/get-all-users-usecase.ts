import { UserEntity } from 'src/domain/entities/user.entity';
import { UserRepository } from 'src/domain/port/user.repository';

export class GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.findAll();
  }
}
