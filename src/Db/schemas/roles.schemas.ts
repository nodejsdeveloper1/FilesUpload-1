import mongoose from "mongoose";
import {  IRoles} from "../entities/roles.entities";
let rolesSchema = new mongoose.Schema<IRoles>({
    uuid: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    display_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


export default mongoose.model("roles", rolesSchema) 