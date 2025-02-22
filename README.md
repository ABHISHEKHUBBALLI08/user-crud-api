# user-crud-api 🚀
A RESTful API for managing users with CRUD operations and AI-powered bio generation using OpenAI. Built with Node.js, Express, MongoDB, and Mongoose.

📌 Features
✔️ User CRUD operations (Create, Read, Update, Delete)
✔️ Secure password hashing (bcrypt)
✔️ Pagination support
✔️ AI-generated user bio using OpenAI GPT-4
✔️ Error handling & input validation

🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB (Mongoose)
AI Integration: OpenAI API (GPT-4)
Security: bcrypt for password hashing
Environment Variables: dotenv
📦 Installation
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Configure Environment Variables (.env file)
Create a .env file in the root directory and add:

plaintext
Copy
Edit
MONGO_URI=your-mongodb-uri
OPENAI_API_KEY=your-openai-api-key
JWT_SECRET=your-jwt-secret
4️⃣ Start the Server
Run the application:

bash
Copy
Edit
node server.js
or use nodemon (for automatic restart on code changes):

bash
Copy
Edit
npm install -g nodemon
nodemon server.js
📌 API Endpoints
1️⃣ User Management
Method	Endpoint	Description
POST	/users	Create a new user
GET	/users	Retrieve all users (paginated)
GET	/users/:id	Get a specific user by ID
PUT	/users/:id	Update user details
DELETE	/users/:id	Delete a user
2️⃣ AI-Powered Bio Generation
Method	Endpoint	Description
POST	/users/:id/generate-bio	Generate a personalized bio using OpenAI
📌 Sample API Requests & Responses
1️⃣ Create a User (POST /users)
Request (JSON)
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
Response (201 Created)
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
2️⃣ Get All Users (GET /users)
Response (200 OK)
json
Copy
Edit
[
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
]
3️⃣ Get a Specific User (GET /users/:id)
Request URL:
plaintext
Copy
Edit
GET http://localhost:5000/users/65c0c99bfa9e7c0012b45f88
Response (200 OK)
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
4️⃣ Update User Details (PUT /users/:id)
Request (JSON)
json
Copy
Edit
{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
Response (200 OK)
json
Copy
Edit
{
  "_id": "65c0c99bfa9e7c0012b45f88",
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "phone": "9876543210",
  "gender": "male",
  "role": "user",
  "bio": "",
  "createdAt": "2025-02-22T08:00:00Z"
}
5️⃣ Generate AI-Powered Bio (POST /users/:id/generate-bio)
Request URL:
plaintext
Copy
Edit
POST http://localhost:5000/users/65c0c99bfa9e7c0012b45f88/generate-bio
Response (200 OK)
json
Copy
Edit
{
  "_id": "65c0c99bfa9e7c0012b45f88",
  "name": "John Updated",
  "email": "johnupdated@example.com",
  "phone": "9876543210",
  "gender": "male",
  "role": "user",
  "bio": "John is a passionate developer who loves working on innovative projects.",
  "createdAt": "2025-02-22T08:00:00Z"
}
6️⃣ Delete a User (DELETE /users/:id)
Request URL:
plaintext
Copy
Edit
DELETE http://localhost:5000/users/65c0c99bfa9e7c0012b45f88
Response (200 OK)
json
Copy
Edit
{
  "message": "User deleted"
}
