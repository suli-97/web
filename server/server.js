import express from 'express'
import path from 'path'
const __dirname = path.resolve()
const app = express()
app.use(express.static('.'))
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/dist/index.html')
})
app.listen(80)