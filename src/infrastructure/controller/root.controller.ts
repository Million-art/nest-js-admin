import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/create-user.usecase';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller()
export class RootController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.createUserUseCase.execute(createUserDto);
  }
}
