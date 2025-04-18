import mongoose from "mongoose";
import {  IUploadFiles} from "../entities/upload.files.entyties";
let pdfUploads = new mongoose.Schema<IUploadFiles>({
    uuid: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    userId: {
        type: String,
        required: true,
        index: true,
        Ref:"users"
    },
    name: {
        type: String,
        required: true
    },
    file: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})


export default mongoose.model("pdfUploads", pdfUploads) 