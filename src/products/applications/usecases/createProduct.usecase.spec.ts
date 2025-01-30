import { mock } from 'jest-mock-extended';
import { IProduct } from '../domains/product';
import { ProductRepository } from '../ports/product.repository';
import { CreateProductUseCase } from './createProduct.usecase';
import { CreateProductCommand } from './createProduct.command';

describe('Create Product Use Case', () => {
  it('It should create a product.', async () => {
    // Arrange
    const product = mock<IProduct>();
    const productRepository = mock<ProductRepository>();
    productRepository.create.mockResolvedValue(product);

    const createProductUseCase = new CreateProductUseCase(productRepository);
    const command: CreateProductCommand = product;
    // Act
    const actual = await createProductUseCase.execute(command);
    // Assert
    expect(actual).toBe(product);
    expect(productRepository.create).toHaveBeenCalledWith(command);
  })
})
