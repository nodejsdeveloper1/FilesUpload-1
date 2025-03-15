
import {FilesUpload} from "../Db/models/upload.files.model"
import { v4 as uuidv4 } from 'uuid';

export class FilesUploadController{
    filesUpload: FilesUpload;
constructor(){
this.filesUpload = new FilesUpload();
}

uploadFile = async(req, res) => {
   try {
    let file = req.file;
    
    let {password,userId} = req.body;
    let fileObject = {
            name: file.originalname,
            file: file.filename,
            password: password,
            userId: userId,
            uuid : uuidv4()
        }
        
    let createFile = await this.filesUpload.create(fileObject)   
      
        res.status(200).json({Message:"File Uploaded Successfully ",Data:createFile})
   } catch (error) {    
    res.status(400).json({Message:"Internal Server Error ",Data:error.message})

   }
};

    downloadFile = async (req, res) => {
        try {
            let uuid = req.query.uuid;
            
            const file = await this.filesUpload.findOne({uuid:uuid});
            
            if (!file) {
                return res.status(404).send('File not found');
            }

            res.set('Content-Type', 'application/pdf');
            res.set('Content-Disposition', `attachment; filename=${file.name}`);
            res.send(file);
        } catch (error) {
            res.status(400).json({Message:error.message,Data:null})
        }
    }
}
