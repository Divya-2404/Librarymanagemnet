const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(5000,()=>{
    console.log("server running")
})


const db=require('./connection')

db.connect((err,res)=>{
    if(!err){
        console.log("db connected")
    }
    else{
        console.log(err)
    }
})

//insert data to db

app.post('/input',(req,res)=>{
    const input=req.body;
    let inputData=`insert into library(id,bookname,author,year,language)
     values('${input.id}', '${input.bookname}','${input.author}','${input.year}','${input.language}')`

     db.query(inputData,(err,result)=>{
        if(!err){
            console.log("data inserted successfully")
            res.status(200)
        }
        else{
            console.log("data insertion failed",err)
            res.status(400)

        }
     })

})



//searching

app.get('/input/:id',(req,res)=>{
    try{
        db.query(`Select * from library where id='${req.params.id}'`,(err,result)=>{
            if(!err){
                res.send(result.rows)
            }
            else{
                res.send("result isnt available")
            }
        })
    }
    catch(error){
        console.log(error)
    }
   
})




app.delete('/input/:id',(req,res)=>{
    let deleteData=`delete from library where id =${req.params.id}`
    db.query(deleteData,(err,result)=>{
        if(!err){
            console.log("deleted successfully")
        }
        else{
            console.log("not successful")
        }
    })
})
