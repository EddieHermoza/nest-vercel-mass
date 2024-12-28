import { CreateMovementDto } from './dto/create-movement.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { QueryProps } from '../pipes/validate-query.pipe';
export declare class InventoryService {
    private readonly db;
    private readonly productService;
    constructor(db: PrismaService, productService: ProductsService);
    createMovement(createMovementDto: CreateMovementDto): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        description: string;
        productId: number;
        quantity: number;
    }>;
    findAllProductsInventory({ page, limit, query, status }: QueryProps): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        stock: number;
        lastStockEntry: Date;
    }[]>;
    findAllMovements({ page, limit }: QueryProps): Promise<({
        Product: {
            name: string;
        };
    } & {
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        description: string;
        productId: number;
        quantity: number;
    })[]>;
    findOneMovement(id: number): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        description: string;
        productId: number;
        quantity: number;
    }>;
}
