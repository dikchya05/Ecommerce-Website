const { Router } = require('express');
const Items = require('../models/items')
const app = Router();

app.post('/items', async(req, res) => {
    try{
    const data = await Items.create(req.body)
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

app.get('/items', async(req, res)=>{
    try{
        const size = req.query.size || 10
        const page = req.query.page
        const skipCount = (size * page - size)
        let orderData
        let totalOrderCount 
        if(page!==null){
             orderData = await Items.find().skip(skipCount).limit(size)
             totalOrderCount =  await Items.find().count()
        }else{
            orderData = await Items.find()
        }
        if(orderData){
            res.json({
                itemsList: orderData,
                totalOrderCount: totalOrderCount
            })
        }
        
    }catch(err){
        console.log(err)
    }
})

app.delete('/items', async(req, res)=>{
    try{
        const data = await Items.findByIdAndDelete(req.body.id)
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
app.put('/items', async(req, res)=>{
    try{
        const data = await Items.findByIdAndUpdate(req.body._id, req.body)
        if(data){
            res.json({
                msg: 'Update Sucessfully'
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