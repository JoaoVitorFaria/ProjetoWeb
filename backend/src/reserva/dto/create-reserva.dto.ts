import { IsDateString, IsEnum, IsNotEmpty} from "class-validator";
import { tipo_reserva } from "../entities/reserva.entity";

export class CreateReservaDto {
    @IsDateString()
    @IsNotEmpty()
    data: Date;

    @IsEnum(tipo_reserva)
    @IsNotEmpty()
    status: tipo_reserva;
}