import { Injectable,BadRequestException,NotFoundException } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { PrismaService } from '../prisma/prisma.service';
import { ProductsService } from '../products/products.service';
import { QueryProps } from '../pipes/validate-query.pipe';
import { Prisma } from '@prisma/client';

@Injectable()
export class InventoryService {

  constructor(private readonly db:PrismaService, private readonly productService:ProductsService){}

  async createMovement(createMovementDto: CreateMovementDto) {

    const {type,quantity,productId} = createMovementDto

    if (createMovementDto.type === 'SALIDA') {

      const product = await this.productService.findOne(createMovementDto.productId)
      
      if (product.stock < createMovementDto.quantity) throw new BadRequestException("El producto no tiene el suficiente stock para realizar el movimiento")
      
    }

    const movementQuantity = type === "ENTRADA" ? quantity : -quantity

    const newStock = await this.db.product.update({
      where:{
        id:productId,
        isArchived:false
      },
      data:{
        lastStockEntry:new Date(),
        stock:{increment:movementQuantity}
      }
    })

    if (!newStock) throw new Error(`Hubo un error al actualizar el stock del producto ${productId}`)

    return await this.db.movement.create({
      data:createMovementDto
    })

  }

  async findAllProductsInventory({page,limit,query,status}:QueryProps){

    const pages = page || 1 
    const skip = (pages - 1) * limit

    return await this.db.product.findMany({
      select:{
        id:true,
        name:true,
        stock:true,
        lastStockEntry:true,
        isActive:true
      },
      where:{
        AND:[
          query ? { name: { contains: query, mode: Prisma.QueryMode.insensitive } } : {},
          status !== null && status !== undefined ? { isActive: status } : {},
        ],
        isArchived:false
        
      },
      skip: skip,
      take: limit,
    })
  }


  async findAllMovements({page,limit}:QueryProps) {
    const pages = page || 1
    const skip = (pages - 1) * limit

    return await this.db.movement.findMany({
      include:{
        Product:{
          select:{
            name:true
          }
        }
      },
      skip:skip,
      take:limit
    })
  }

  async findOneMovement(id: number) {
    const movement = await this.db.movement.findFirst({
      where:{
        id
      }
    }) 

    if (!movement ) throw new NotFoundException(`El movimiento con el id ${id} no existe`)

    return movement
  }


}
