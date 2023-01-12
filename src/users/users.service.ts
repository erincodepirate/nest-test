import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { PhotosEntity } from 'src/photos/photos.entity';
import { User } from './interfaces/user';
import { CreateUserDTO } from './dto/create-users.dto';
import { UpdateUserDTO } from './dto/update-users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        @InjectRepository(PhotosEntity)
        private readonly photosRepository: Repository<PhotosEntity>,

    ) {}

    async create(user: CreateUserDTO) : Promise<User>{
        return await this.userRepository.save(user);
    }

    async findall() : Promise<User[]> {
        return await this.userRepository.find({relations:['photos']})
    }

    async findOne(id: number) : Promise<User> {
        return await this.userRepository.findOne({where:{id: id}, relations: ['photos']});
    }

    async delete(id: number) : Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }

    async update(id: number, user: UpdateUserDTO) : Promise<UpdateResult> {
        return await this.userRepository.update(id, user); 
    }
}
