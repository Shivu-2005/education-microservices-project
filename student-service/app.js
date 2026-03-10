const express = require('express');
        const app = express();
        app.use(express.json());

        let data = [
  {
    "id": 1,
    "name": "Rahul",
    "course": "AI"
  },
  {
    "id": 2,
    "name": "Sneha",
    "course": "ML"
  }
];

        app.get('/students',(req,res)=>{
            res.json(data);
        });

        app.post('/students',(req,res)=>{
            const item = { id:data.length+1, ...req.body };
            data.push(item);
            res.json({message:"Added successfully", item});
        });

        app.listen(4201,()=>{
            console.log("student-service running on port 4201");
        });