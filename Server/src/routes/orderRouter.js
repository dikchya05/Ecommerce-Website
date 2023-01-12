const { Router } = require('express');
const Orders = require('../models/orders')
const app = Router();

app.post('/orders', async(req, res) => {
    try{
    const data = await Orders.create(req.body)
    if(data){
        res.json({
            msg: "Sucessfully Added"
        })
    }else{
        res.json({
            msg: "something went wrong"
        })
    }
    }catch(err){
        console.log(err)
    }
})

app.get('/orders', async(req, res)=>{
    try{
        const orderData = await Orders.find()
        if(orderData){
            res.json({
                itemsList: orderData
            })
        }
        
    }catch(err){
        console.log(err)
    }
})

app.delete('/orders', async(req, res)=>{
    try{
        const data = await Orders.findByIdAndDelete(req.body.id)
        if(data){
            res.json({
                msg: 'Delete Sucessfully'
            })
        }else{
            res.json({
                errMsg: 'Something went wrong'
            })
        }
    }catch(err){
        console.log(err)
    }
})


module.exports = app;