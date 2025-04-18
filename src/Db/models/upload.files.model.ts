import { BaseModel } from '../Model';
import { IUploadFiles } from '../entities/upload.files.entyties';
import pdfUploads from '../schemas/upload.files.schemas';
export class FilesUpload extends BaseModel<IUploadFiles > {
    constructor() {
      super(pdfUploads);
    }
  }