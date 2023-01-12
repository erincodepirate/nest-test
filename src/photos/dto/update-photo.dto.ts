import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePhotoDTO {
    @IsOptional()
    @IsInt()
    id: number;

    @IsOptional()
    @IsString()
    url: string;
}