import { Document } from "mongoose";

export interface IRoles extends Document {
    uuid: string;
    name: string;
    display_name: string;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}