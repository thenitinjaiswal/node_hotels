const express = require('express');
const router = express.Router();
const MenuItem = require('../models/Menu');


router.post('/',async (req,res) =>{
    try{
        const data = req.body
        const newMenuItem = new MenuItem(data);
        const response = await  newMenuItem.save();
        console.log('data saved');
        res.status(200).json(response);

    }catch(err){
        console.log(err);
        res.status(500).json({error :'Internal Server Error'});
    }
})
router.get('/', async (req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);

    }catch(err){
        console.log(err);
        res.status(500).json({error :'Internal Server Error'});
    }
})


router.get('/:taste', async (req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste == 'sour'|| taste == 'spicy'|| taste == 'sweet'){
            const response = await MenuItem.find({taste: taste});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error: 'Invalid work Type'})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'})

    }
})

module.exports = router;