# 🪖 Military Assets Management System
project Link: [Military Assets Managment](https://militry-assets-managment-frontend.vercel.app/).

A full-stack **MERN (MongoDB, Express, React, Node.js)** application designed to manage and monitor military assets efficiently.  
It provides secure access control for Admins and Officers to register, assign, and track assets using a centralized dashboard.
---

## 1. Project Overview

### Description
The **Military Assets Management System** is built to streamline the process of handling defense equipment, vehicles, and supplies.  
It ensures data consistency, real-time updates, and restricted access to authorized users only.

### Key Features
- Role-based authentication (Admin / Officer)
- Dashboard to view total assets, assigned/unassigned items
- Asset creation, assignment, and tracking
- Secure JWT-based login system
- RESTful APIs for data communication
- Centralized error handling and validation
- Responsive frontend dashboard using **React + Bootstrap**

### Assumptions
- Each user belongs to either **Admin** or **Officer** role.
- Assets are created and assigned only by Admins.
- Officers can view and update assigned assets.
- Backend APIs are deployed on **Render**, frontend on **Vercel**.

### Limitations
- Offline access not supported yet.
- Currently supports a limited number of roles (Admin, Officer).
- File upload for asset documents not implemented in this version.

---

##  2. Tech Stack & Architecture

### Frontend
- **React.js** with functional components and hooks  
- **React Router DOM** for routing  
- **Axios** for API communication  
- **Bootstrap 5** for responsive UI  

### Backend
- **Node.js** with **Express.js**  
- **Mongoose** for MongoDB ORM  
- **JWT Authentication** for secure login  
- **Bcrypt.js** for password hashing  
- **CORS** and **dotenv** for configuration

### Database
- **MongoDB Atlas** (cloud-hosted NoSQL DB)
- Data organized into collections: `users`, `assets`, and `assignments`

### Deployment

- Frontend:[ Deployed on Vercel](https://military-assets-management-six.vercel.app/)
- backend:[Deployed on render](https://kristalball-backend-014q.onrender.com)

## 📁 Project Structure

```text
frontend/
├── public/
├── src/
│   ├── api/                # API endpoints and Axios configuration
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application pages
│   ├── constants/          # Application constants
│   ├── utils/              # Utility and authentication functions
│   ├── App.jsx             # Root React component
│   ├── main.jsx            # Application entry point (or index.jsx for CRA)
│   └── index.css           # Global styles
├── package.json
├── package-lock.json
└── README.md
```
## 📁 Backend Folder Structure

```text
backend/
├── config/
│   └── db.js                       # MongoDB database connection
│
├── controllers/
│   ├── assignmentController.js     # Assignment business logic
│   ├── dashboardController.js      # Dashboard business logic
│   ├── expenditureController.js    # Expenditure business logic
│   ├── purchaseController.js       # Purchase business logic
│   └── transferController.js       # Transfer business logic
│
├── middleware/
│   ├── authMiddleware.js           # JWT authentication middleware
│   └── roleMiddleware.js           # Role-based authorization middleware
│
├── models/
│   ├── Asset.js                    # Asset schema
│   ├── Assignment.js               # Assignment schema
│   ├── AuditLog.js                 # Audit log schema
│   ├── Base.js                     # Base schema
│   ├── Expenditure.js              # Expenditure schema
│   ├── Purchase.js                 # Purchase schema
│   ├── Transfer.js                 # Transfer schema
│   └── User.js                     # User schema
│
├── routes/
│   ├── authRoutes.js               # Authentication routes
│   ├── assignmentRoutes.js         # Assignment routes
│   ├── auditRoutes.js              # Audit log routes
│   ├── baseRoutes.js               # Base routes
│   ├── dashboardRoutes.js          # Dashboard routes
│   ├── purchaseRoutes.js           # Purchase routes
│   └── transferRoutes.js           # Transfer routes
│
├── .env                            # Environment variables
├── package.json                    # Project dependencies
├── package-lock.json               # Dependency lock file
└── index.js                        # Application entry point
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/mohmadimran/military-assets-management.git
```

### 2. Navigate to the Project Directory

```bash
cd military-assets-management
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder and add the required environment variables.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the Backend Server

```bash
npm run dev
```

or

```bash
npm start
```

---

### 6. Install Frontend Dependencies

Open a new terminal and run:

```bash
cd military-assets-management/frontend
npm install
```

### 7. Start the Frontend Development Server

If you're using **Vite**:

```bash
npm run dev
```

If you're using **Create React App**:

```bash
npm start
```

---

## 🔗 Backend API

Ensure the backend server is running before starting the frontend.

By default, the backend runs on:

```text
http://localhost:5000
```

Update your frontend API configuration (e.g., Axios base URL) if the backend is running on a different host or port.
📦 Build for Production
npm run build

🤝 Contributing
Contributions are welcome.

👨‍💻 Author
Imran Khan Pathan

MERN Stack Developer

Portfolio:https://www.crio.do/learn/portfolio/pathanimrankhan308/

GitHub:https://github.com/mohmadimran

LinkedIn:www.linkedin.com/in/imrankhan-pathan-881375265

