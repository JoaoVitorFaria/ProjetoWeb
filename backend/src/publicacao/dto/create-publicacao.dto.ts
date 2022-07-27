import { IsNotEmpty, IsString } from "class-validator";
import { Entity} from "typeorm";

@Entity()
export class CreatePublicacaoDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    autor: string;

    @IsString()
    @IsNotEmpty()
    editora: string;
}