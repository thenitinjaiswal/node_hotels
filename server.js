const express = require('express')
const app = express();
const db = require('./db')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req,res){
    res.send('Welcome to my hotels... How can i help u ')
})

const personRoutes = require('./routes/personRoutes');

app.use('/person' , personRoutes);

const menuItems = require('./routes/menuRoutes')
app.use('/menu', menuItems);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

