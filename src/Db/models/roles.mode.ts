import { BaseModel } from '../Model';
import { IRoles } from '../entities/roles.entities';
import rolesSchema from '../schemas/roles.schemas';
export class RolesModel extends BaseModel<IRoles > {
    constructor() {
      super(rolesSchema);
    }
  }