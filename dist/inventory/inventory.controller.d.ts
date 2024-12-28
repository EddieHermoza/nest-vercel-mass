import { InventoryService } from './inventory.service';
import { CreateMovementDto } from './dto/create-movement.dto';
import { QueryProps } from 'src/pipes/validate-query.pipe';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    findAll(params: QueryProps): Promise<{
        name: string;
        isActive: boolean;
        id: number;
        stock: number;
        lastStockEntry: Date;
    }[]>;
    create(createMovementDto: CreateMovementDto): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        description: string;
        productId: number;
        quantity: number;
    }>;
    findAllMovements(params: QueryProps): Promise<({
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
    findOne(id: number): Promise<{
        id: number;
        created: Date;
        type: import(".prisma/client").$Enums.MovementType;
        description: string;
        productId: number;
        quantity: number;
    }>;
}
