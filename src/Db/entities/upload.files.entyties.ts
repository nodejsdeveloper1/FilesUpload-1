import { Document } from "mongoose";

export interface IUploadFiles extends Document {
    uuid: string;
    name: string;
    file: string;
    userId: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
}