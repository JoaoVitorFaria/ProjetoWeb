import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExemplarDto {
    @IsNumber()
    @IsNotEmpty()
    preco: number;
}