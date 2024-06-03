const mongoose = require("mongoose")

exports.connectDb = () => {
  mongoose.connect(process.env.db_url,{
      useNewUrlParser: true
    }).then((data) =>{
    
    }).catch((error) => {
  console.log(error)
    })
}