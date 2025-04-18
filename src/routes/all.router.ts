const express = require("express");
const multer =require('multer');
import {UsersController} from '../controllers/users.controller';
import {FilesUploadController} from '../controllers/upload.files.controller';
const router = express.Router();
let userController = new UsersController();
let filesUploadController = new FilesUploadController();
const upload = multer({dest:'uploads/'});

router.post('/create',userController.createUser);
router.get('/',userController.FetchUsers);
router.post('/upload',upload.single('file'),filesUploadController.uploadFile);
router.get('/download',filesUploadController.downloadFile);

export default router;