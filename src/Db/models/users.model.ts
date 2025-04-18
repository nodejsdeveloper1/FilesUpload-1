import { BaseModel } from '../Model';
import { IUsers } from '../entities/users.entities';
import UserSchema from '../schemas/users.schema';
export class UserModel extends BaseModel<IUsers > {
    constructor() {
      super(UserSchema);
    }
  }