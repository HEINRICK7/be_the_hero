const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const HOST = 'localhost';
const PORT = 3333;

app.listen(PORT, HOST, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`Connected http://${HOST}:${PORT}`)
    }
});