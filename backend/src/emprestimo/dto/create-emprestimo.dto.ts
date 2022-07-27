import { IsDateString, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateEmprestimoDto {
    @IsInt()
    @IsNotEmpty()
    nro_exemplar: number;

    @IsString()
    @IsNotEmpty()
    isbn: string;

    @IsDateString()
    @IsNotEmpty()
    data_emp: Date;

    @IsDateString()
    @IsNotEmpty()
    data_devol: Date;
}

