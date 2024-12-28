import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  exports:[ProductsService],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    CloudinaryService,
    PrismaService
  
  ],
})
export class ProductsModule {}
