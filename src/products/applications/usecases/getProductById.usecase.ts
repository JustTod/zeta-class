import { Inject, Injectable } from '@nestjs/common';
import { ProductRepository, productRepositoryToken } from '../ports/product.repository';
import { GetProductByIdQuery } from './getProductById.query';
import { IProduct } from '../domains/product';

@Injectable()
export class GetProductByIdUseCase {
  constructor(
    @Inject(productRepositoryToken)
    private readonly productRepository: ProductRepository
  ) {}
  async execute(query: GetProductByIdQuery): Promise<IProduct> {
    return this.productRepository.getById(query.id);
  }
}
