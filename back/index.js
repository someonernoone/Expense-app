const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const { connectDb } = require("./config/mongodb")
const app = express();
const cookieParser = require('cookie-parser')
const path = require('path')




dotenv.config({ path: "config.env" })

connectDb()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1", require("./routers/userRoute"))
app.use("/api/v1", require("./routers/transactionRoute"))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", " Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(express.static(path.join(__dirname,'./client/build')))

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const port = process.env.PORT || 5000




app.listen(port, () => {
  console.log(`app is lidtern ${port}`)

})