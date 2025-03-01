# User CRUD API

## 🚀 Overview
A RESTful **User Management API** built with **Node.js** and **Express.js**, supporting Create, Read, Update, and Delete (CRUD) operations. This API allows managing user data efficiently and follows RESTful principles.

## ✨ Features
- ✅ Perform CRUD operations on user data
- ✅ Uses **MongoDB** as the database (or specify if different)
- ✅ Well-structured API endpoints with proper status codes
- ✅ Input validation and error handling
- ✅ Secure authentication (if implemented)

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Authentication:** JWT (if applicable)  
- **Other Dependencies:** dotenv, bcrypt, cors (if used)

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
git clone https://github.com/ABHISHEKHUBBALLI08/user-crud-api.git
cd user-crud-api

###2️⃣ Install Dependencies
npm install
Configure Environment Variables
Create a .env file and add the following:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
###4️⃣ Run the Application
sh
Copy
Edit
npm start
OR for development mode:

sh
Copy
Edit
npm run dev
###5️⃣ API Endpoints
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create new user
PUT	/users/:id	Update user
DELETE	/users/:id	Delete user

📢 Contributing
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Added new feature")
Push to the branch (git push origin feature-branch)
Open a pull request
📜 License
This project is licensed under the MIT License.

⭐ Support
If you find this useful, star the repo to show your support! 😊
![Screenshot (438)](https://github.com/user-attachments/assets/9b44b6fb-5a5c-4f34-8d38-46d62937c997)

![Screenshot (439)](https://github.com/user-attachments/assets/56c9b4e2-24b4-431b-937e-2a711a18f358)

![Screenshot (440)](https://github.com/user-attachments/assets/a9b85df3-1571-43ec-9109-a5580a2804af)

![Screenshot (441)](https://github.com/user-attachments/assets/2a507db4-b0b6-4701-a62f-87b14ea510dd)
