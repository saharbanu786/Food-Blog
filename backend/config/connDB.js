const mongoose=require("mongoose")

const connDB=async()=>{
    await mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log("MongoDB Connected successfully"))
}

module.exports=connDB