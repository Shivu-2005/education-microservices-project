const express = require('express');
        const app = express();
        app.use(express.json());

        let data = [
  {
    "id": 1,
    "name": "Ramesh",
    "subject": "Math"
  },
  {
    "id": 2,
    "name": "Anita",
    "subject": "Physics"
  }
];

        app.get('/teachers',(req,res)=>{
            res.json(data);
        });

        app.post('/teachers',(req,res)=>{
            const item = { id:data.length+1, ...req.body };
            data.push(item);
            res.json({message:"Added successfully", item});
        });

        app.listen(4202,()=>{
            console.log("teacher-service running on port 4202");
        });