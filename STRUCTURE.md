# WeChat Messaging Platform - Project Root Directory

This is the root directory of the WhatsUp messaging application. All major components are organized here for easy access.

## 📂 Root Level Structure

```
WeChat-Messaging-Platform/
│
├── 📁 backend/                 # Node.js Express API Server
│   ├── src/
│   │   ├── server.js
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── sockets/
│   │   └── uploads/
│   ├── package.json
│   └── .env
│
├── 📁 frontend/                # React + Vite Web Application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   ├── hooks/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── 📁 database/                # MongoDB Schemas & Migrations
│   ├── migrations/             # Schema update scripts
│   ├── seeds/                  # Initial data scripts
│   └── backups/                # Database backups
│
├── 📁 config/                  # Shared Configuration
│   └── Environment configs
│
├── 📁 docs/                    # Documentation
│   ├── API.md                  # API endpoints
│   ├── SETUP.md                # Installation guide
│   └── CONTRIBUTING.md         # Contribution guidelines
│
├── 📁 .github/                 # GitHub specific
│   └── workflows/              # CI/CD workflows
│
├── 📁 scripts/                 # Utility Scripts
│   └── start-all.sh           # Start all services
│
├── 📄 .env.example             # Environment template
├── 📄 .gitignore               # Git exclusions
├── 📄 LICENSE                  # ISC License
└── 📄 README.md                # Main project documentation
```

## 🚀 Quick Start

### Install & Run
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

### Environment Setup
1. Copy `.env.example` to `.env`
2. Fill in required variables
3. For backend: `backend/.env`
4. For frontend: `frontend/.env`

## 📚 Key Files Location

| What | Where |
|------|-------|
| API Endpoints | `backend/src/routes/` |
| Database Models | `backend/src/models/` |
| React Components | `frontend/src/components/` |
| Redux State | `frontend/src/store/` |
| API Documentation | `docs/API.md` |
| Setup Instructions | `docs/SETUP.md` |
| Environment Variables | `.env.example` |

## 🔗 Important Links

- **API Documentation**: See `docs/API.md`
- **Setup Guide**: See `docs/SETUP.md`
- **Contributing**: See `docs/CONTRIBUTING.md`
- **GitHub Repository**: https://github.com/kamaneeya-05/WeChat-Messaging-Platform

---

Start with `README.md` for a complete overview!
