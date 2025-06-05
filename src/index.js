import connectDB from "./db/index.js";
import 'dotenv/config'


connectDB()

























/*
import express from "express"

const app=express()

;(async () => {
    try {
        
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log(error)
            throw error
        })

        app.listen(process.env.PORT , () =>{
            console.log("Example app listening  ");
            
        })
    } catch (error) {
        console.log("ERROR" ,error);
        throw error
    }
})()
    */