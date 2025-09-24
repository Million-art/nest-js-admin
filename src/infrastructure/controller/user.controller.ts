import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateUserUseCase } from 'src/application/use-cases/create-user.usecase';
import { CreateUserDto } from '../dto/create-user.dto';
import { GetAllUsersUseCase } from 'src/application/use-cases/get-all-users-usecase';
import { UpdateUserUseCase } from 'src/application/use-cases/update-user-usecase';
import { DeleteUserUseCase } from 'src/application/use-cases/delete-user.usercase';
import { GetUserUseCase } from 'src/application/use-cases/get-user-usecase';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUserUseCase: GetUserUseCase,
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  async getAllUser() {
    return await this.getAllUsersUseCase.execute();
  }

  @Get(':id')
  async getUserById(@Param() id: string) {
    return await this.getUserUseCase.execute(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.deleteUserUseCase.execute(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return await this.updateUserUseCase.execute({
      id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  }
}
