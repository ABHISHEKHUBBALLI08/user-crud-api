# user-crud-api 🚀
A RESTful API for managing users with CRUD operations and AI-powered bio generation using OpenAI. Built with Node.js, Express, MongoDB, and Mongoose.

📌 Features
✔️ Create, Read, Update, and Delete (CRUD) Users
✔️ Secure Password Hashing (bcrypt)
✔️ Pagination Support
✔️ AI-Generated User Bio (OpenAI GPT-4)
✔️ Error Handling & Validations

🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
AI Integration: OpenAI API (GPT-4)
Security: bcrypt for password hashing
Environment Variables: dotenv
📦 Installation
Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
Install dependencies
bash
Copy
Edit
npm install
Set up the .env file
plaintext
Copy
Edit
MONGO_URI=your-mongodb-uri
OPENAI_API_KEY=your-openai-api-key
JWT_SECRET=your-jwt-secret
Start the server
bash
Copy
Edit
node server.js
or use nodemon for live reloading:
bash
Copy
Edit
npm install -g nodemon
nodemon server.js
📌 API Endpoints
1️⃣ User Management
Method	Endpoint	Description
POST	/users	Create a new user
GET	/users	Get all users (paginated)
GET	/users/:id	Get a specific user by ID
PUT	/users/:id	Update user details
DELETE	/users/:id	Delete a user
2️⃣ AI-Powered Bio Generation
Method	Endpoint	Description
POST	/users/:id/generate-bio	Generates a bio using OpenAI
📌 Sample Request & Response
Create a User (POST /users)
Request
json
Copy
Edit
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "9876543210",
  "password": "securepassword",
  "gender": "male",
  "role": "user"
}
Response
json
Copy
Edit
{
  "_id": "65c0c99bfa9e7c0012b45f88",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "phone": "9876543210",
  "gender": "male",
  "role": "user",
  "bio": "",
  "createdAt": "2025-02-22T08:00:00Z"
}
