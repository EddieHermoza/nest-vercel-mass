import { UserRole } from '@prisma/client';
export declare class CreateUserDto {
    dni: string;
    number: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    isActive: boolean;
}
