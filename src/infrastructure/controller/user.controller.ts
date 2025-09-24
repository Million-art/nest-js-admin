import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/create-user.usecase';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(@Body() createUserDto:CreateUserDto){
    return await this.createUserUseCase.execute(createUserDto)
  }

   
  

}
