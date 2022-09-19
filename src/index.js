const express=require("express");

const app=express();


//port
const PORT=3001;
app.listen(PORT,()=>console.log(`Running Express Server on Port ${PORT}`));

app.get('/groceries',(req,res)=>{
    res.send([
    {
        item:'milk',
        quantity:2,
    },
    {
        item:'jus',
        quantity:1,
    },
    {
        item:'ceral',
        quantity:2,
    },



    ])
})