import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { tipo_associado } from "../entities/associado.entity";

export class CreateAssociadoDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    endereco: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsEnum(tipo_associado)
    @IsNotEmpty()
    status: tipo_associado;
}