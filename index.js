const express = require('express');
const app = express();
const PORT=8080;

app.use(express.json());

app.listen(
    PORT,
    ()=> console.log("Server Start")
)

app.get('/request',(req,res)=>{
    res.status(200).send({
        a:"abc"
    })
})

app.post('/hi/:id',(req,res)=>{
    const { id } = req.params;
    const {body} = req.body;

    res.status(200).send({
        hi:`${id}`
    })
})