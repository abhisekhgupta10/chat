const app= require('express')();
const cors = require('cors')
const server = require('http').createServer(app)
const PORT = process.env.port || 5000
const io = require('socket.io')(server,{
    cors:{
        origin:"*"
    
    }
})
io.on('connection',(socket)=>{
   
 
    socket.on('chat',(payload)=>{
      
        io.emit("chat",payload)
    })
})

server.listen(PORT,()=>{
    console.log("listening...")
})