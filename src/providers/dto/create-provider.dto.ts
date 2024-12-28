import { IsBoolean, IsEmail, IsNumber, IsString, Length } from "class-validator"

export class CreateProviderDto {

    @IsString({message:"El ruc debe ser un string"})
    @Length(11,11,{message:"El ruc debe tener 11 digitos"})
    ruc:string

    @IsString({message:"El nombre debe ser un string"})
    name:string

    @IsString({message:"El legal debe ser un string"})
    legal:string

    @IsString({message:"La web debe ser un string"})
    web:string

    @IsEmail({}, { message: 'El correo electrónico no es válido.' })
    email:string

    @IsString({message:"La número debe ser un string"})
    @Length(9, 9, { message: 'El número debe tener 9 caracteres.' })
    number:string

    @IsBoolean({message:'El campo isActive debe ser un booleano'})
    isActive:boolean
}
