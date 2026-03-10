const express = require('express');
        const app = express();
        app.use(express.json());

        let data = [
  {
    "id": 1,
    "student": "Rahul",
    "status": "Present"
  },
  {
    "id": 2,
    "student": "Sneha",
    "status": "Absent"
  }
];

        app.get('/attendance',(req,res)=>{
            res.json(data);
        });

        app.post('/attendance',(req,res)=>{
            const item = { id:data.length+1, ...req.body };
            data.push(item);
            res.json({message:"Added successfully", item});
        });

        app.listen(4206,()=>{
            console.log("attendance-service running on port 4206");
        });