const multer = require('multer')
const fs = require('fs')

const imageFilter = (req,file,cb) => {
    if(file.mimetype.startsWith("image")){
        cb(null, true)
    }else{
        cb('Please upload image images', false)
    }
}

var storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, __basedir + "/resources/assets/uploads")
    },
    filename: (req,file,cb) => {
        cb(null,`${Date.now()}-${file.originalname}`)
    }
})

var uploadFile = multer({storage: storage, fileFilter: imageFilter})
module.exports = uploadFile