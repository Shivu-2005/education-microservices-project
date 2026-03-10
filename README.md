
# 🎓 Education Microservices Project

This project demonstrates a **Node.js Microservices Architecture** built using **Express.js**.  
The system is divided into multiple independent services that communicate through APIs.

---

## 🚀 Services Included

1. **Student Service**
2. **Teacher Service**
3. **Course Service**
4. **Department Service**
5. **Library Service**
6. **Attendance Service**
7. **API Gateway**

Each service runs independently on different ports.

---

## 🏗 Project Structure

```

education-microservices-project
│
├── student-service
│   └── app.js
│
├── teacher-service
│   └── app.js
│
├── course-service
│   └── app.js
│
├── department-service
│   └── app.js
│
├── library-service
│   └── app.js
│
├── attendance-service
│   └── app.js
│
├── api-gateway
│   └── app.js
│
├── run.js
├── package.json
└── README.md

```

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- REST API
- Microservices Architecture
- JavaScript

---

## ▶️ How to Run the Project

### 1️⃣ Clone the Repository

```

git clone [https://github.com/Shivu-2005/education-microservices-project.git](https://github.com/Shivu-2005/education-microservices-project.git)

```

### 2️⃣ Go to the project folder

```

cd education-microservices-project

```

### 3️⃣ Install dependencies

```

npm install

```

### 4️⃣ Start all services

```

node run.js

```

---

## 🌐 API Endpoints

| Service | Endpoint |
|------|------|
| Student Service | http://localhost:4201/students |
| Teacher Service | http://localhost:4202/teachers |
| Course Service | http://localhost:4203/courses |
| Department Service | http://localhost:4204/departments |
| Library Service | http://localhost:4205/books |
| Attendance Service | http://localhost:4206/attendance |

You can test these APIs using **Postman**.

---

## 📌 Features

- Independent Microservices
- RESTful APIs
- Multiple service architecture
- API Gateway
- Modular backend design

---

## 👨‍💻 Author

**Prajwal J**  
Computer Science (AI & ML)  
ATME College of Engineering

---

## ⭐ Future Improvements

- MongoDB database integration
- Docker containerization
- Swagger API documentation
- Authentication & Authorization
- Service communication
```

---

✅ After adding this file, run:

```bash
git add README.md
git commit -m "Added project README"
git push
```

