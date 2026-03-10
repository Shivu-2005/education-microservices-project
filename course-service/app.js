const express = require('express');
        const app = express();
        app.use(express.json());

        let data = [
  {
    "id": 1,
    "name": "Artificial Intelligence",
    "duration": "6 Months"
  },
  {
    "id": 2,
    "name": "Machine Learning",
    "duration": "6 Months"
  }
];

        app.get('/courses',(req,res)=>{
            res.json(data);
        });

        app.post('/courses',(req,res)=>{
            const item = { id:data.length+1, ...req.body };
            data.push(item);
            res.json({message:"Added successfully", item});
        });

        app.listen(4203,()=>{
            console.log("course-service running on port 4203");
        });