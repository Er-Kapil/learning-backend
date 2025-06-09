import connectDB from "./db/index.js";
import 'dotenv/config'
import app from "./app.js"


connectDB()
.then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running at port ${process.env.PORT}`)
    })
})
.catch((error) => {
    console.log("Mongo connection failed !! ",error)
})

























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