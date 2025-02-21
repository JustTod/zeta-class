import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { JwtAuthGuard } from '../../../auth/jwtAuth.guard';
import { CreateProductUseCase } from '../../applications/usecases/createProduct.usecase'
import { CreateProductCommand } from '../../applications/usecases/createProduct.command';
import { CreateProductDto } from './createProduct.dto';

import { GetAllProductsUseCase } from '../../applications/usecases/getAllProduct.usecase';
import { GetProductByIdUseCase } from '../../applications/usecases/getProductById.usecase';
import { GetProductByIdQuery } from '../../applications/usecases/getProductById.query';

import { UpdateProductByIdDto } from './updateProductById.dto';
import { UpdateProductByIdCommand } from '../../applications/usecases/updateProductById.command';
import { UpdateProductByIdUseCase } from '../../applications/usecases/updateProductById.usecase';

import { DeleteProductByIdCommand } from '../../../products/applications/usecases/deleteProductById.command';
import { DeleteProductByIdUseCase } from '../../../products/applications/usecases/deleteProductById.usecase';

@Controller('products')
export class ProductController {
  constructor(
    private readonly createProductUseCase: CreateProductUseCase,
    private readonly getAllProductsUseCase: GetAllProductsUseCase,
    private readonly getProductByIdUseCase: GetProductByIdUseCase,
    private readonly updateProductByIdUseCase: UpdateProductByIdUseCase,
    private readonly deleteProductByIdUseCase: DeleteProductByIdUseCase,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    const productCreatedCommand: CreateProductCommand = createProductDto;
    return this.createProductUseCase.execute(productCreatedCommand);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.getAllProductsUseCase.execute();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string) {
    const query: GetProductByIdQuery = {
      id,
    };
    return this.getProductByIdUseCase.execute(query);
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteById(@Param('id') id: string) {
    const command: DeleteProductByIdCommand = {
      id,
    };

    return this.deleteProductByIdUseCase.execute(command);
  }

  @Get()
  hello() {
    return 'hello world'
  }
}
