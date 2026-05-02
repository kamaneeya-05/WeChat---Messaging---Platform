# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication Endpoints

### Register User
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "username": "username"
  }
  ```
- **Response:** `201 Created`

### Login User
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** `200 OK` with JWT token

### Logout User
- **POST** `/auth/logout`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK`

---

## User Endpoints

### Get User Profile
- **GET** `/users/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK` with user data

### Update User Profile
- **PUT** `/users/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
  ```json
  {
    "username": "newusername",
    "bio": "My bio",
    "profilePicture": "url"
  }
  ```
- **Response:** `200 OK`

### Search Users
- **GET** `/users/search/:query`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK` with matching users

---

## Chat Endpoints

### Get All Chats
- **GET** `/chats`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK` with chat list

### Create New Chat
- **POST** `/chats`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
  ```json
  {
    "participantId": "userId",
    "chatName": "optional name"
  }
  ```
- **Response:** `201 Created`

### Delete Chat
- **DELETE** `/chats/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK`

---

## Message Endpoints

### Get Chat Messages
- **GET** `/messages/:chatId`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK` with message array

### Send Message
- **POST** `/messages`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
  ```json
  {
    "chatId": "chatId",
    "content": "message content",
    "mediaUrl": "optional media url"
  }
  ```
- **Response:** `201 Created`

### Edit Message
- **PUT** `/messages/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Body:**
  ```json
  {
    "content": "updated message"
  }
  ```
- **Response:** `200 OK`

### Delete Message
- **DELETE** `/messages/:id`
- **Headers:** `Authorization: Bearer {token}`
- **Response:** `200 OK`

---

## Error Responses

All errors follow this format:
```json
{
  "error": "Error message",
  "statusCode": 400
}
```

### Common Error Codes
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error
