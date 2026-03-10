const { spawn } = require('child_process');

const services = [
 'student-service/app.js',
 'teacher-service/app.js',
 'course-service/app.js',
 'department-service/app.js',
 'library-service/app.js',
 'attendance-service/app.js',
 'api-gateway/app.js'
];

services.forEach(service => {
 const process = spawn('node',[service],{stdio:'inherit',shell:true});

 process.on('close',code=>{
  console.log(`${service} stopped with code ${code}`);
 });
});