import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { ProvidersModule } from './providers/providers.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CloudinaryService } from './cloudinary/cloudinary.service';
import { InventoryModule } from './inventory/inventory.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [UsersModule, ProvidersModule, AuthModule, ProductsModule, InventoryModule, SalesModule],
  providers: [PrismaService, AuthService, CloudinaryService],

})
export class AppModule {}
