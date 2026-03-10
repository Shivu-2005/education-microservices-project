const express = require('express');
        const app = express();
        app.use(express.json());

        let data = [
  {
    "id": 1,
    "name": "Node.js Guide",
    "author": "John"
  },
  {
    "id": 2,
    "name": "AI Basics",
    "author": "David"
  }
];

        app.get('/books',(req,res)=>{
            res.json(data);
        });

        app.post('/books',(req,res)=>{
            const item = { id:data.length+1, ...req.body };
            data.push(item);
            res.json({message:"Added successfully", item});
        });

        app.listen(4205,()=>{
            console.log("library-service running on port 4205");
        });