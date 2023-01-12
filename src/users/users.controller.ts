import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-users.dto';
import { User } from './interfaces/user';
import { UsersService } from './users.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateUserDTO } from './dto/update-users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {

    }

    @Post()
    async create(@Body() user: CreateUserDTO): Promise<User> {
        return await this.usersService.create(user);
    }

    @Get()
    async findall(): Promise<User[]> {
        return await this.usersService.findall();
    }

    @Get(':id')
    async findOne(@Param('id', new ParseIntPipe()) id): Promise<User> {
        return await this.usersService.findOne(id);
    }

    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe()) id): Promise<DeleteResult> {
        console.log("hello from controller");
        return await this.usersService.delete(id);
    }

    @Put(':id')
    async update(
        @Param('id', new ParseIntPipe()) id,
        @Body() user: UpdateUserDTO
    ): Promise<UpdateResult> {
        return await this.usersService.update(id, user)
    }
}
