const mongoose = require("mongoose")

const dbUrl = "mongodb://localhost:27017/UserFilesUploads"

const connection = mongoose.connect(dbUrl)
if(connection){
    console.log("db is connected successfully");
}else{
    console.log("error in Db Connection");
}

export default connection