const obj = require('./server');
const express = require('express');
const fs = require('fs-extra');
const yargs = require('yargs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const formidableExpress = require('express-formidable'); // midleware function to parse files uploaded
const port = 3000;
app.listen(port);

app.use(express.static('public'));
app.use(express.json());
app.use(express.text())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(formidableExpress());

app.post('/routeNote', (req, res) => {
    let dataRow = [];
    fs.readJSON('./books.json')
    .then(dataArray => {
        dataArray.map(obj => dataRow.push(obj));
    })
    .then(() => {
        dataRow.push(req.body);
    })
    .then(() => console.log(dataRow))
    .then(() => {
        fs.writeJSON('./books.json', dataRow)
    .then(() => {
        res.end('Saved!');
    })
    .catch(err => alert(err.message));
    })
});


app.post('/sendfile', (req, res) => {
  
    const filePath = req.files.file.path;
    
    fs.readFile(filePath, (err, data) => {

        if (err) console.log(err.stack);
        fs.writeFile(path.join(__dirname+'/uploadedFiles/'+req.files.file.name), data)
        .then(resolve => {
            resolve(data);
        })
        .then(res.end('done'))
    })
    

   // console.log(filePath);
   //res.end();
})



const args = process.argv;

console.log(args[2]);

const deleteFile = () => {
    const fileName = args[3];
    fs.unlink('./uploadedFiles/'+fileName, err => {
        if (err) console.log(err.stack);
    });
    setTimeout(() => process.exit(), 2000)
}

const addFiles = (arg) => {
   // const fileName = args[3];
    //const fileContent = args[4];
    
    //fs.writeFile('./uploadedFiles/'+fileName, fileContent, err => err ? alert(err.stack): null);
    console.log(arg);
   setTimeout(() => process.exit(), 2000)
  
}

const copyFile = () => {
    const fileName = args[3];
    const filePath = args[4];

    fs.copy('./uploadedFiles/'+fileName, filePath);
}


console.log(obj.title)