import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { QueryProps, ValidateQueryPipe } from '../pipes/validate-query.pipe';
import { ValidateId } from '../pipes/validate-id.pipe';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body(ValidateQueryPipe) createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto)
  }

  @Get()
  async findAll(@Query(ValidateQueryPipe) params:QueryProps) {
    return this.productsService.findAll(params)
  }

  @Get(':id')
  async findOne(@Param('id',ValidateId) id: number) {
    return this.productsService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id',ValidateId) id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto)
  }

  @Delete(':id')
  async remove(@Param('id',ValidateId) id: number) {
    return this.productsService.remove(id)
  }
}
