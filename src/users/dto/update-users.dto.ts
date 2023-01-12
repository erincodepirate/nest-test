import { IsArray, IsEmail, IsInt, IsOptional, IsString } from "class-validator";
import { UpdatePhotoDTO } from "src/photos/dto/update-photo.dto";

export class UpdateUserDTO {
    @IsOptional()
    @IsString()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsString()
    password: string;
}