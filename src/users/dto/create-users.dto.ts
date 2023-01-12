import { IsArray, IsEmail, IsNotEmpty, IsString } from "class-validator";
import { PhotosEntity } from "src/photos/photos.entity";

export class CreateUserDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsArray()
    photos: PhotosEntity[];
}