import {IUsers} from "../entities/users.entities";
import mongoose from "mongoose";

let UserSchema = new mongoose.Schema<IUsers>({
    uuid: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        Ref:"roles"
    }

}, {
    timestamps: true
})


export default mongoose.model("users", UserSchema) 