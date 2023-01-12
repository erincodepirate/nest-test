import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosEntity } from 'src/photos/photos.entity';
import { UsersController } from './users.controller';
import { UserEntity } from './users.entity';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PhotosEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
