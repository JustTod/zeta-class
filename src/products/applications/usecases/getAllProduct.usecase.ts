import { Inject, Injectable } from "@nestjs/common";
import { ProductRepository, productRepositoryToken } from "../ports/product.repository";
import { IProduct } from "../domains/product";

@Injectable()
export class GetAllProductsUseCase {
  constructor(
    @Inject(productRepositoryToken)
    private readonly productRepository: ProductRepository,
  ) {}
  execute(): Promise<IProduct[]> {
    return this.productRepository.getAll();
  }
}
