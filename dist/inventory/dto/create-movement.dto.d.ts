import { MovementType } from "@prisma/client";
export declare class CreateMovementDto {
    productId: number;
    quantity: number;
    description: string;
    type: MovementType;
}
