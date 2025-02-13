import { faker } from '@faker-js/faker';
import { mock } from 'jest-mock-extended';
import { ProductRepository } from '../ports/product.repository';
import { DeleteProductByIdUseCase } from './deleteProductById.usecase';
import { DeleteProductByIdCommand } from './deleteProductById.command';

describe('Delete product by id use case', () => {
  it('should be pass correct id to delete', async () => {
    // Arrange
    const productId = faker.database.mongodbObjectId().toString();
    const productsRepository = mock<ProductRepository>();

    const deleteProductByIdUseCase = new DeleteProductByIdUseCase(
      productsRepository
    );

    const command: DeleteProductByIdCommand = {
      id: productId
    };

    // Act
    await deleteProductByIdUseCase.execute(command);

    // Assert
    expect(productsRepository.deleteById).toHaveBeenCalledWith(productId);
  })
})
