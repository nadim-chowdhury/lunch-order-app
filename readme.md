# Lunch Order App

## Requirements

- Docker & Docker Compose
- Node.js

## Setup

1. Clone the repository.
2. Navigate to the project root.
3. Ensure you run postgres db on port 5432
4. Ensure you had create db named mydb

## Running the App

```bash
# sudo systemctl start docker

# npx prisma generate

# npx prisma migrate dev

docker-compose up --build
```

---

The frontend is available at http://localhost:3000.
The backend Swagger API documentation is available at http://localhost:8000/api/docs.

---

This guide provides the full workflow from setting up the project to running it in Docker containers. Let me know if you need any further clarifications!
