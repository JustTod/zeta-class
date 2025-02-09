import { Body,  Controller, Post, Get } from '@nestjs/common';
import { CreateProductUseCase } from '../../applications/usecases/createProduct.usecase'
import { CreateProductDto } from './createProduct.dto';
import { CreateProductCommand } from '../../applications/usecases/createProduct.command';
import { GetAllProductsUseCase } from 'src/products/applications/usecases/getAllProduct.usecase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase
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
}
