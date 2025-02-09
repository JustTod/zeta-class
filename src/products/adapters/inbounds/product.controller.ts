import { Body,  Controller, Post, Get, Param } from '@nestjs/common';
import { CreateProductUseCase } from '../../applications/usecases/createProduct.usecase'
import { CreateProductDto } from './createProduct.dto';
import { CreateProductCommand } from '../../applications/usecases/createProduct.command';
import { GetAllProductsUseCase } from 'src/products/applications/usecases/getAllProduct.usecase';
import { GetProductByIdUseCase } from 'src/products/applications/usecases/getProductById.usecase';
import { GetProductByIdQuery } from 'src/products/applications/usecases/getProductById.query';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
  ) {}


  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const productCreatedCommand: CreateProductCommand = createProductDto;
    return this.createProductUseCase.execute(productCreatedCommand);
  }
  @Get()
  getAll() {
    return this.getAllProductsUseCase.execute();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    const query: GetProductByIdQuery = {
      id,
    };
    return this.getProductByIdUseCase.execute(query);
  }
}
