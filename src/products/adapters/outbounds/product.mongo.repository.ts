import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../applications/ports/product.repository';
import { IProduct, Product } from '../../applications/domains/product';
import { InjectModel } from '@nestjs/mongoose';
import { productsCollectionName } from './product.mongo.schema';
import { Model } from 'mongoose';
import { ProductEntity } from './product.entity';
import { Builder } from 'builder-pattern';

@Injectable()
export class ProductMongoRepository implements ProductRepository {
  constructor(
    @InjectModel(productsCollectionName)
    private readonly productModel: Model<ProductEntity>
  ) {}

  async getById(id: string): Promise<IProduct> {
    const product = await this.productModel.findById(id).lean().exec();
    return ProductMongoRepository.toDomain(product);
  }
  async getAll(): Promise<IProduct[]> {
    const products = await this.productModel.find().lean().exec();
    return products.map(ProductMongoRepository.toDomain)
  }

  async create(product: IProduct): Promise<IProduct> {
    const newProduct = new this.productModel(product);
    const productCreated = await newProduct.save();
    return ProductMongoRepository.toDomain(productCreated)
  }

  async updateById(id: string, product: Partial<IProduct>): Promise<IProduct> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(
        id,
        {
          ...product,
        },
        { new: true }
      )
      .lean()
      .exec();

      return ProductMongoRepository.toDomain(updatedProduct);
  }

  async deleteById(id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: id }).exec();
  }

  static toDomain(product: ProductEntity): IProduct {
    return Builder(Product)
      .id(product._id.toString())
      .name(product.name)
      .detail(product.detail)
      .price(product.price)
      .quantity(product.quantity)
      .createdAt(product.createdAt)
      .updatedAt(product.updatedAt)
      .build()
  }
}
