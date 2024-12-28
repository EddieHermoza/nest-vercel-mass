import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
import { PrismaService } from 'src/prisma/prisma.service';

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
