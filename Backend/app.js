const express =require('express')
const mongoose=require('mongoose')
const PORT= process.env.PORT || 5000
const router =require('./routes/book-routes')
const app=express();
const cors=require('cors')
// Midleware 

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/Books')
.then(()=>console.log("conection successful"))
.catch(err=>console.log(err))

app.use('/books',router)


app.listen(PORT,()=>console.log(`server is running on ${PORT}` ))

