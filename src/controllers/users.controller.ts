import {UserModel} from '../Db/models/users.model';
import { v4 as uuidv4 } from 'uuid';

export class UsersController {
    userModel : UserModel;
    constructor(){
        this.userModel = new UserModel();
    }
     createUser = async(req,res)=>{
        try{
            req.body.uuid = uuidv4();
            const user = await this.userModel.create(req.body);
            res.status(200).json(user);
        }catch(error){
            res.status(400).json({error: error.message});
        }
    }

    FetchUsers = async(req,res)=>{          
        try{
            const users = await this.userModel.find();
            res.status(200).json(users);
        }catch(error){
            res.status(400).json({error: error.message});
        }     
    }          

}
