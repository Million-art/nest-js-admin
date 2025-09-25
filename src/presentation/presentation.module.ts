import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { ApplicationModule } from 'src/application/application.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
    imports:[ApplicationModule,SharedModule],
    controllers:[UserController]
})
export class PresentationModule {}
