const express = require('express');
        const app = express();
        app.use(express.json());

        let data = [
  {
    "id": 1,
    "name": "Computer Science",
    "block": "A"
  },
  {
    "id": 2,
    "name": "Mechanical",
    "block": "B"
  }
];

        app.get('/departments',(req,res)=>{
            res.json(data);
        });

        app.post('/departments',(req,res)=>{
            const item = { id:data.length+1, ...req.body };
            data.push(item);
            res.json({message:"Added successfully", item});
        });

        app.listen(4204,()=>{
            console.log("department-service running on port 4204");
        });