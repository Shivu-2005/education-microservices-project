const express = require('express');
const app = express();

app.get('/',(req,res)=>{
 res.send("Education Microservices API Gateway Running");
});

app.listen(4300,()=>{
 console.log("API Gateway running on port 4300");
});