import { IsString, IsNotEmpty, IsEnum, IsEmail } from "class-validator";
import { tipo_funcionario } from "../entities/funcionario.entity";

export class CreateFuncionarioDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEnum(tipo_funcionario)
    @IsNotEmpty()
    funcao: tipo_funcionario;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;
}