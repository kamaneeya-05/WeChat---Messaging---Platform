# WhatsUp - Real-time Messaging Application

A modern, full-stack real-time messaging application built with React, Node.js, Express, MongoDB, and WebSocket technology.

## 🌟 Features

- **Real-time Messaging**: Instant message delivery using Socket.io
- **User Authentication**: Secure login and registration with JWT
- **Chat Management**: Create, manage, and delete conversations
- **User Profiles**: Customizable user profiles with profile pictures
- **Message Status**: Track message delivery status
- **Media Support**: Share files and media in chats
- **Responsive Design**: Modern UI built with React and Tailwind CSS
- **State Management**: Redux Toolkit for centralized state management

## 📁 Project Structure

```
WeChat-Messaging-Platform/
│
├── backend/                    # Node.js Express Server
│   ├── src/
│   │   ├── server.js          # Main server entry point
│   │   ├── config/
│   │   │   └── db.js          # MongoDB configuration
│   │   ├── controllers/       # Route controllers
│   │   │   ├── authController.js
│   │   │   ├── chatController.js
│   │   │   ├── messageController.js
│   │   │   └── userController.js
│   │   ├── middleware/        # Custom middleware
│   │   │   └── authMiddleware.js
│   │   ├── models/            # MongoDB schemas
│   │   │   ├── User.js
│   │   │   ├── Chat.js
│   │   │   ├── Message.js
│   │   │   └── Flag.js
│   │   ├── routes/            # API routes
│   │   │   ├── authRoutes.js
│   │   │   ├── chatRoutes.js
│   │   │   ├── messageRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── sockets/           # WebSocket handlers
│   │   │   └── chatSocket.js
│   │   └── uploads/           # File uploads
│   │       ├── chat_media/
│   │       └── profile_pictures/
│   ├── package.json
│   └── .env.example
│
├── frontend/                   # React Vite Application
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── chat/
│   │   │   │   ├── ChatHeader.jsx
│   │   │   │   ├── ChatWindow.jsx
│   │   │   │   ├── MessageList.jsx
│   │   │   │   ├── MessageBubble.jsx
│   │   │   │   ├── MessageInput.jsx
│   │   │   │   └── InfoPanel.jsx
│   │   │   ├── common/
│   │   │   │   ├── Avatar.jsx
│   │   │   │   └── EmptyState.jsx
│   │   │   └── sidebar/
│   │   │       ├── Sidebar.jsx
│   │   │       ├── ConversationList.jsx
│   │   │       ├── ConversationItem.jsx
│   │   │       ├── SearchBar.jsx
│   │   │       └── StartChatForm.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ProfileSettings.jsx
│   │   ├── config/
│   │   │   └── api.js
│   │   ├── store/             # Redux store
│   │   │   ├── store.js
│   │   │   ├── hooks.js
│   │   │   └── features/
│   │   │       ├── authSlice.js
│   │   │       └── chatSlice.js
│   │   ├── hooks/             # Custom React hooks
│   │   │   └── useChat.js
│   │   ├── data/
│   │   │   └── mockData.js
│   │   └── types/
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── eslint.config.js
│   └── index.html
│
├── docs/                       # Documentation
│   ├── API.md                 # API endpoints documentation
│   ├── SETUP.md               # Installation & setup guide
│   └── CONTRIBUTING.md        # Contribution guidelines
│
├── scripts/                    # Utility scripts
│   └── start-all.sh          # Start both servers
│
├── .github/                    # GitHub specific files
│   └── workflows/
│       └── ci.yml            # CI/CD workflow
│
├── .env.example               # Environment template
├── .gitignore                 # Git exclusions
├── LICENSE                    # ISC License
└── README.md                  # Main documentation
```

## 🚀 Getting Started

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/kamaneeya-05/WeChat-Messaging-Platform.git
   cd WeChat-Messaging-Platform
   ```

2. **Setup Environment**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Follow the Detailed Setup Guide**
   
   See [docs/SETUP.md](docs/SETUP.md) for complete installation instructions.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas URI)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory:
   ```
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend directory:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

**For detailed setup instructions, see [docs/SETUP.md](docs/SETUP.md)**

## 📦 Dependencies

### Backend
- **Express** - Web framework
- **Mongoose** - MongoDB ODM
- **Socket.io** - Real-time communication
- **bcryptjs** - Password hashing
- **jsonwebtoken** - JWT authentication
- **cors** - Cross-origin resource sharing
- **multer** - File upload handling
- **dotenv** - Environment variables

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Redux Toolkit** - State management
- **React Redux** - Redux bindings for React
- **Socket.io Client** - WebSocket client
- **Axios** - HTTP client
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Icon library

## 🔐 Security Features

- **Password Hashing**: bcryptjs for secure password storage
- **JWT Authentication**: Token-based user authentication
- **Protected Routes**: JWT validation on protected endpoints
- **Real-time Communication**: Socket.io with secure WebSocket
- **CORS**: Configured cross-origin requests

## 🛣️ API Routes

See [docs/API.md](docs/API.md) for complete API documentation including:
- Authentication endpoints
- User management
- Chat operations
- Message handling

### Quick Reference
- **Authentication**: `POST /api/auth/register`, `/api/auth/login`
- **Users**: `GET /api/users/:id`, `PUT /api/users/:id`
- **Chats**: `GET /api/chats`, `POST /api/chats`
- **Messages**: `GET /api/messages/:chatId`, `POST /api/messages`

---

## 📚 Documentation

- [API Documentation](docs/API.md) - All API endpoints with examples
- [Setup Guide](docs/SETUP.md) - Detailed installation & configuration
- [Contributing Guide](docs/CONTRIBUTING.md) - How to contribute to this project

---

## 🤝 Contributing

Contributions are welcome! Please see [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on:
- How to contribute
- Commit message format
- Code style standards
- Pull request process

## 🧪 Development

### Code Quality
- ESLint configured for code linting
- Run `npm run lint` in the frontend directory

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd backend
npm run build
npm start
```

For complete development instructions, see [docs/SETUP.md](docs/SETUP.md).

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 📧 Support

For questions, bug reports, or feature requests, please open an issue on [GitHub Issues](https://github.com/kamaneeya-05/WeChat-Messaging-Platform/issues).

---

