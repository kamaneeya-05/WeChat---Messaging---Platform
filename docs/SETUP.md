# Installation & Setup Guide

## Prerequisites
- Node.js v14 or higher
- npm or yarn
- MongoDB (Atlas or local)
- Git

## Project Structure
```
WeChat-Messaging-Platform/
├── frontend/              # React Vite application
├── backend/               # Node.js Express server
├── docs/                  # Documentation
├── scripts/               # Utility scripts
├── .github/               # GitHub workflows
├── README.md              # Main project documentation
├── LICENSE                # ISC License
├── .gitignore             # Git exclusions
└── .env.example           # Environment template
```

## Backend Setup

### 1. Navigate to Backend
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
```bash
cp ../.env.example .env
```

### 4. Update .env Variables
Edit `.env` with your values:
```
PORT=5000
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/whatsup
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### 5. Start Backend Server
```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

---

## Frontend Setup

### 1. Navigate to Frontend
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
```bash
cp ../.env.example .env
```

### 4. Update .env Variables
Edit `.env`:
```
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

### 5. Start Development Server
```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

---

## Running Both Services

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Building for Production

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview
```

---

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify network access if using Atlas

### Port Already in Use
- Change PORT in backend .env
- Change port in frontend vite.config.js

### Module Not Found
- Delete node_modules and package-lock.json
- Run `npm install` again

### CORS Issues
- Check cors configuration in backend/src/server.js
- Verify frontend URL in CORS settings
