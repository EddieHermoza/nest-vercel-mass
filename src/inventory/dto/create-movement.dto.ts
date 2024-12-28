import { MovementType } from "@prisma/client";
import { IsEnum, IsIn, IsInt, IsString } from "class-validator";

export class CreateMovementDto {

    @IsInt()
    productId:number

    @IsInt()
    quantity:number

    @IsString()
    description:string

    @IsEnum(MovementType, { message: 'El tipo de movimiento debe ser uno de los siguientes valores: ENTRADA, SALIDA.' })
    type:MovementType
}
