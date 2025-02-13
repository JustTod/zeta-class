import { Body,  Controller, Post, Get, Param, Put } from '@nestjs/common';

import { CreateProductUseCase } from '../../applications/usecases/createProduct.usecase'
import { CreateProductCommand } from '../../applications/usecases/createProduct.command';
import { CreateProductDto } from './createProduct.dto';
import { UpdateProductByIdDto } from './updateProductById.dto';
import { GetAllProductsUseCase } from '../../applications/usecases/getAllProduct.usecase';
import { GetProductByIdUseCase } from '../../applications/usecases/getProductById.usecase';
import { GetProductByIdQuery } from '../../applications/usecases/getProductById.query';
import { UpdateProductByIdCommand } from '../../applications/usecases/updateProductById.command';
import { UpdateProductByIdUseCase } from '../../applications/usecases/updateProductById.usecase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
    private readonly updateProductByIdUseCase: UpdateProductByIdUseCase,
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

  @Put(':id')
  updateById(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductByIdDto
  ) {
    const command: UpdateProductByIdCommand = {
      id,
      product: updateProductDto
    };

    return this.updateProductByIdUseCase.execute(command);
  }
}
