import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateProductDTO {
    @IsOptional()
    @IsString()
    readonly name: string;

    @IsOptional()
    @IsInt()
    readonly qty: number;

    @IsOptional()
    @IsInt()
    readonly price: number;
}