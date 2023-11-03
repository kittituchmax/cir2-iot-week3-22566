const express = require('express')
const app = express();
const dotdnv = require('dotenv').config()
console.log(dotenv)

const port = process.env.PORT || 3000;

//http://localhost:3000
app.get('/',(req,res) => {
    return res.status(200).json({msg:"Hello World!"});
});

//http://localhost:3000/about
app.get('/about',(req,res) => {
    return res.status(200).json({msg:"About page"});
});//route

//http://localhost:3000/admin
app.get('/admin',(req,res) => {
    return res.status(200).json({msg:"Admin page"});
});

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
});
