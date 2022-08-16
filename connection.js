const {Pool}=require('pg')

const pool= new Pool ({                      //creates new object pool
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'divya@24',
    database:'postgres'

}) 


module.exports=pool