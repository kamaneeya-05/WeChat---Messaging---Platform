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
WhatsUp/
├── backend/                 # Node.js Express backend
│   ├── src/
│   │   ├── server.js       # Main server entry point
│   │   ├── config/
│   │   │   └── db.js       # Database configuration
│   │   ├── controllers/    # Route controllers
│   │   │   ├── authController.js
│   │   │   ├── chatController.js
│   │   │   ├── messageController.js
│   │   │   └── userController.js
│   │   ├── middleware/     # Custom middleware
│   │   │   └── authMiddleware.js
│   │   ├── models/         # MongoDB schemas
│   │   │   ├── User.js
│   │   │   ├── Chat.js
│   │   │   ├── Message.js
│   │   │   └── Flag.js
│   │   ├── routes/         # API routes
│   │   │   ├── authRoutes.js
│   │   │   ├── chatRoutes.js
│   │   │   ├── messageRoutes.js
│   │   │   └── userRoutes.js
│   │   ├── sockets/        # WebSocket handlers
│   │   │   └── chatSocket.js
│   │   └── uploads/        # File uploads
│   │       ├── chat_media/
│   │       └── profile_pictures/
│   └── package.json
│
├── message/                 # React frontend (Vite)
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
│   │   ├── store/          # Redux store
│   │   │   ├── store.js
│   │   │   ├── hooks.js
│   │   │   └── features/
│   │   │       ├── authSlice.js
│   │   │       └── chatSlice.js
│   │   ├── hooks/          # Custom React hooks
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
└── README.md               # This file
```

## 🚀 Getting Started

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

The backend will be running on `http://localhost:5000`

### Frontend Setup

1. Navigate to the message directory:
   ```bash
   cd message
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the message directory:
   ```
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:5173`

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

## 🔐 Authentication

The application uses JWT-based authentication:
- Users register with email and password
- Password is hashed using bcryptjs
- JWT token is issued upon login
- Token is stored in localStorage on the client
- Protected routes require valid JWT token

## 🔌 Real-time Features

Socket.io is used for:
- Real-time message delivery
- User online/offline status
- Typing indicators
- Message read receipts
- Chat notifications

## 📸 File Upload

- Profile pictures: `/uploads/profile_pictures/`
- Chat media: `/uploads/chat_media/`
- Handled by multer middleware

## 🛣️ API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/search/:query` - Search users

### Chats
- `GET /api/chats` - Get all chats
- `POST /api/chats` - Create new chat
- `DELETE /api/chats/:id` - Delete chat

### Messages
- `GET /api/messages/:chatId` - Get messages in chat
- `POST /api/messages` - Send message
- `PUT /api/messages/:id` - Edit message
- `DELETE /api/messages/:id` - Delete message

## 🧪 Development

### Code Quality
- ESLint is configured for code linting
- Run `npm run lint` in the frontend directory

### Building for Production

**Frontend:**
```bash
cd message
npm run build
```

**Backend:**
```bash
cd backend
npm run build
```

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/whatsup
JWT_SECRET=your_secret_key_here
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 📧 Contact

For questions or support, please reach out through the repository issues.

---

Made with ❤️ by the WhatsUp Team
