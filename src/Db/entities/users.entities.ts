import { Document } from "mongoose";

export interface IUsers extends Document {
    uuid: string;
    name: string;
    email: string;
    mobile: string;
    password: string;
    address: string;
    role: string;
    status: string; 
    createdAt?: Date;
    updatedAt?: Date;
}