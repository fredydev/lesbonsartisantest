const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 5001;


const app = express();

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"upload");
    },
    filename: (req,file,cb) => {
        const namer = (file) =>{
            let cheminFichier = path.resolve(`./upload/${file.originalname}`)
            let extFichier = path.extname(cheminFichier);
            fs.exists(cheminFichier, (exists) => {
                if(!exists){
                    cb(null,file.originalname);
                    return;
                }
                let fileName = path.basename(cheminFichier,extFichier)
                file.originalname = fileName+"(1)"+extFichier
                return namer(file);
                

            })
        } 
        namer(file);
        
        
    }
});
const upload = multer({ storage: storage})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.all("/fileupload",upload.single("file"),(req,res) => {
    if(req.method ==="GET" || req.method ==="PUT" || req.method ==="DELETE" ){
        res.statusCode = 403;
        res.end(`l'operation ${req.method} n'est pas permis sur cet end-point `);
        return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type","application/json");
    //res.json(req.file);
    res.redirect("/success")
})



app.listen(PORT,()=>{
    console.log("Something magic is hapenning here...")
})