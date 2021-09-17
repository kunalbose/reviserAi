const { spawn } = require("child_process");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
      }
  });
const upload = multer({ storage: storage });

function initRoutes(app){
    // Home page
    app.get("/", (req, res)=>{
        res.render("dashboard");
    });
    app.post("/audio", upload.single('audio'), (req, res)=>{
        const childPython = spawn('python', ['../dashboard.py']);
        childPython.stdout.on('data', (data)=>{
            console.log("hello!!");
        })
        return res.redirect('/');
    })
}

module.exports = initRoutes;