import { IsString, IsEmail, IsBoolean, IsOptional, Length,IsEnum } from 'class-validator';
import { UserRole } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  @Length(8, 8, { message: 'El DNI debe tener exactamente 8 caracteres.' })
  dni: string

  @IsString()
  @Length(9, 9, { message: 'El número debe tener 9 caracteres.' })
  number: string

  @IsString()
  @Length(2, 50, { message: 'El nombre debe tener entre 2 y 50 caracteres.' })
  name: string

  @IsString()
  @Length(2, 50, { message: 'El apellido debe tener entre 2 y 50 caracteres.' })
  lastName: string

  @IsEmail({}, { message: 'El correo electrónico no es válido.' })
  email: string

  @IsString()
  @Length(8, 20, { message: 'La contraseña debe tener entre 8 y 20 caracteres.' })
  password: string

  @IsEnum(UserRole, { message: 'El rol debe ser uno de los siguientes valores: ADMINISTRADOR, VENDEDOR, CLIENTE.' })
  role: UserRole

  @IsBoolean({ message: 'El campo isActive debe ser un valor booleano.' })
  isActive: boolean
}