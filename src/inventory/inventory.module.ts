import { Module } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { InventoryController } from './inventory.controller';
import { ProductsModule } from 'src/products/products.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[ProductsModule],
  controllers: [InventoryController],
  providers: [InventoryService,PrismaService],
})
export class InventoryModule {}
