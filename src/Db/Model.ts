// src/models/BaseModel.ts
import { Model, Document } from 'mongoose';

export class BaseModel<T extends Document> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create(data);
  }

  async find(query = {}): Promise<T[]> {
    return this.model.find(query).exec();
  }

  async findOne(query = {}){
    return this.model.findOne(query)
  }

  async findById(id): Promise<T | null> {
    return this.model.findById(id).exec();
  }

  async update(query: any, data: Partial<T>): Promise<any> {
    return this.model.updateMany(query, data).exec();
  }

  async delete(query: any): Promise<any> {
    return this.model.deleteMany(query).exec();
  }
}