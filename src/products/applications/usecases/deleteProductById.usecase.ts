import { Inject, Injectable } from '@nestjs/common';
import {
  productRepositoryToken,
  ProductRepository
} from '../ports/product.repository';
import { DeleteProductByIdCommand } from './deleteProductById.command';

@Injectable()
export class DeleteProductByIdUseCase {
  constructor(
    @Inject(productRepositoryToken.toString())
    private readonly productsRepository: ProductRepository,
  ) {}

  async execute(command: DeleteProductByIdCommand) {
    return this.productsRepository.deleteById(command.id);
  }
}
