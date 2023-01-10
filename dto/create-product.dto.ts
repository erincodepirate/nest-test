import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDTO {
   /* @IsNotEmpty()
    @IsString()
    readonly id: string;*/

    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @IsNotEmpty()
    @IsInt()
    readonly qty: number;

    @IsNotEmpty()
    @IsInt()
    readonly price: number;

    @IsNotEmpty()
    @IsString()
    readonly partNumber: string;

    @IsOptional()
    @IsString()
    dimension: string;

    @IsOptional()
    @IsInt()
    weight: number;

    @IsOptional()
    @IsString()
    manufacturer: string;

    @IsOptional()
    @IsString()
    origin: string;
}