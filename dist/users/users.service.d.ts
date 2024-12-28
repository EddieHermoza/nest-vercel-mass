import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRole } from '@prisma/client';
import { QueryProps } from 'src/pipes/validate-query.pipe';
export declare class UsersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
    }>;
    findAll(role: UserRole, { limit, query, status, page }: QueryProps): Promise<{
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
    }[]>;
    findOne(id: number): Promise<{
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<{
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
    }>;
    remove(id: number): Promise<{
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
    }>;
    findOneByEmail(email: string): Promise<{
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
    }>;
}
