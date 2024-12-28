import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { PrismaService } from '../prisma/prisma.service';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class ProvidersService {
    private readonly db;
    constructor(db: PrismaService);
    create(createProviderDto: CreateProviderDto): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string;
    }>;
    findAll({ limit, page, query, status }: QueryProps): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string;
    }[]>;
    findOne(id: number): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string;
    }>;
    update(id: number, updateProviderDto: UpdateProviderDto): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string;
    }>;
    remove(id: number): Promise<{
        number: string;
        name: string;
        email: string;
        isActive: boolean;
        id: number;
        created: Date;
        updated: Date;
        isArchived: boolean;
        ruc: string;
        legal: string;
        web: string;
    }>;
}
