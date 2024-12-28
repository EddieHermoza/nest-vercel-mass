import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findAllWorkers(params: QueryProps): Promise<{
        created: string;
        updated: string;
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        isArchived: boolean;
    }[]>;
    findAllCustomers(params: QueryProps): Promise<{
        created: string;
        updated: string;
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
        isArchived: boolean;
    }[]>;
    findAllAdmins(params: QueryProps): Promise<{
        created: string;
        updated: string;
        number: string;
        dni: string;
        name: string;
        lastName: string;
        email: string;
        password: string;
        role: import(".prisma/client").$Enums.UserRole;
        isActive: boolean;
        id: number;
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
}
