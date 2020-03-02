# 📝 Task Manager App

A simple **full-stack Task Manager** web application built with:

- **Frontend:** React  
- **Backend:** Express.js (Node.js), REST API  
- **Database:** PostgreSQL  
- **Containerized:** Docker  
- **Orchestration:** Kubernetes

---

## 🔧 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-manager-app.git
cd task-manager-app
```

### 2️⃣ Development (recommended)
For hot-reload development (React + API), run:
```bash
docker-compose -f docker-compose.dev.yml up --build
```
Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/tasks

PostgreSQL: running in the background

### 3️⃣ Production
For a production-ready build, run:
```bash
docker-compose up --build
```
Frontend served via nginx at: http://localhost

Backend runs on: http://localhost:5000

PostgreSQL initialized with initdb/init.sql

### 4️⃣ Database
Postgres is initialized with the following table:
```bash
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL
);
```

You can customize this in initdb/init.sql.
