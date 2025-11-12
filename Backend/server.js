const express=require('express')
const fs=require("fs")
const path=require("path")

const app=express()
const port=3000

const CORS=require('cors')
const { error } = require('console')
app.use(CORS());

app.listen(port,()=>{
    console.log(`server stared at ${port}`)
})