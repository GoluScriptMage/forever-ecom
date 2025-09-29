# Imagine Stack

A modern full-stack application built with Vite, React, Tailwind CSS v3, and Node.js/Express.

## 🚀 Tech Stack

### Frontend
- **Vite** - Lightning fast build tool
- **React** - Modern UI library
- **Tailwind CSS v3** - Utility-first CSS framework
- **React Router** - Declarative routing for React
- **React Toastify** - Toast notifications for React

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
Imagine-Stack/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── backend/           # Node.js + Express API
│   ├── src/
│   │   └── server.js
│   ├── config/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── middleware/
│   ├── utils/
│   ├── tests/
│   ├── package.json
│   └── .env.example
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup
```bash
cd backend
npm install

# Copy environment file and configure as needed
cp .env.example .env

npm run dev
```

The backend will be available at `http://localhost:3000`

## 🎨 Features

### Frontend
- ⚡ Lightning-fast development with Vite
- 🎨 Beautiful UI with Tailwind CSS v3
- 📱 Responsive design
- 🔄 Hot module replacement (HMR)
- 🎭 Custom animations and transitions
- 🛣️ Client-side routing with React Router
- 🍞 Toast notifications with React Toastify

### Backend
- 🚀 RESTful API with Express
- 🔒 CORS enabled for cross-origin requests
- 📝 Environment-based configuration
- 🛡️ Error handling middleware
- 📊 Health check endpoint

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server
- `npm test` - Run tests (to be implemented)

## 🌐 API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check

## 🔮 Next Steps

1. Add database integration (MongoDB, PostgreSQL, etc.)
2. Implement authentication and authorization
3. Add API routes and controllers
4. Set up testing framework
5. Configure deployment pipeline
6. Add logging and monitoring

## 📄 License

This project is licensed under the ISC License.