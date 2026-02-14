# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication

All API endpoints (except auth endpoints) require authentication via NextAuth session.

### Headers
```
Cookie: next-auth.session-token=<token>
```

---

## Authentication Endpoints

### Login
```http
POST /api/auth/signin
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "id": "user-id",
    "email": "user@example.com",
    "fullName": "User Name",
    "role": "USER"
  }
}
```

### Logout
```http
POST /api/auth/signout
```

---

## Users Endpoints

### Get All Users
```http
GET /api/users
```

**Access:** Admin only

**Response:**
```json
[
  {
    "id": "user-id",
    "email": "user@example.com",
    "fullName": "User Name",
    "phoneNumber": "081234567890",
    "role": "USER",
    "status": "ACTIVE",
    "jenjang": {
      "id": "jenjang-id",
      "name": "Junior"
    },
    "upa": {
      "id": "upa-id",
      "name": "UPA Jakarta"
    }
  }
]
```

### Get User by ID
```http
GET /api/users/:id
```

**Access:** 
- Admin: Can view any user
- Editor: Can view users in their UPA
- User: Can only view their own profile

**Response:**
```json
{
  "id": "user-id",
  "email": "user@example.com",
  "fullName": "User Name",
  "phoneNumber": "081234567890",
  "role": "USER",
  "status": "ACTIVE",
  "jenjang": {
    "id": "jenjang-id",
    "code": "J1",
    "name": "Junior"
  },
  "upa": {
    "id": "upa-id",
    "code": "UPA001",
    "name": "UPA Jakarta"
  }
}
```

### Update User
```http
PATCH /api/users/:id
```

**Access:**
- Admin: Can update any user
- User: Can only update their own profile (limited fields)

**Request Body:**
```json
{
  "fullName": "Updated Name",
  "phoneNumber": "081234567890",
  "password": "newpassword123"
}
```

**Admin can also update:**
```json
{
  "role": "EDITOR",
  "upaId": "upa-id",
  "jenjangId": "jenjang-id"
}
```

**Response:**
```json
{
  "id": "user-id",
  "email": "user@example.com",
  "fullName": "Updated Name",
  "role": "USER"
}
```

### Delete User
```http
DELETE /api/users/:id
```

**Access:** Admin only

**Response:**
```
204 No Content
```

---

## Activities Endpoints

### Get Activities
```http
GET /api/activities?page=1&limit=10
```

**Access:**
- Admin: See all activities
- Editor: See activities in their UPA
- User: See only their own activities

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10)

**Response:**
```json
{
  "activities": [
    {
      "id": "activity-id",
      "title": "Training Session",
      "description": "Monthly training",
      "date": "2024-01-15T00:00:00.000Z",
      "location": "Meeting Room A",
      "user": {
        "id": "user-id",
        "fullName": "User Name",
        "email": "user@example.com"
      },
      "upa": {
        "id": "upa-id",
        "name": "UPA Jakarta",
        "code": "UPA001"
      },
      "createdAt": "2024-01-10T00:00:00.000Z",
      "updatedAt": "2024-01-10T00:00:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

### Create Activity
```http
POST /api/activities
```

**Access:** All authenticated users

**Request Body:**
```json
{
  "title": "New Activity",
  "description": "Activity description",
  "date": "2024-01-15",
  "location": "Location Name"
}
```

**Response:**
```json
{
  "id": "activity-id",
  "title": "New Activity",
  "description": "Activity description",
  "date": "2024-01-15T00:00:00.000Z",
  "location": "Location Name",
  "userId": "user-id",
  "upaId": "upa-id",
  "user": {
    "id": "user-id",
    "fullName": "User Name",
    "email": "user@example.com"
  },
  "upa": {
    "id": "upa-id",
    "name": "UPA Jakarta",
    "code": "UPA001"
  }
}
```

---

## Master Data Endpoints

### UPA Endpoints

#### Get All UPAs
```http
GET /api/master/upas
```

**Access:** Admin only

**Response:**
```json
[
  {
    "id": "upa-id",
    "code": "UPA001",
    "name": "UPA Jakarta",
    "location": "Jakarta",
    "_count": {
      "users": 10,
      "activities": 25
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Create UPA
```http
POST /api/master/upas
```

**Access:** Admin only

**Request Body:**
```json
{
  "code": "UPA002",
  "name": "UPA Bandung",
  "location": "Bandung"
}
```

**Response:**
```json
{
  "id": "upa-id",
  "code": "UPA002",
  "name": "UPA Bandung",
  "location": "Bandung",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Jenjang Endpoints

#### Get All Jenjangs
```http
GET /api/master/jenjangs
```

**Access:** Admin only

**Response:**
```json
[
  {
    "id": "jenjang-id",
    "code": "J1",
    "name": "Junior",
    "description": "Junior Level",
    "_count": {
      "users": 15
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Create Jenjang
```http
POST /api/master/jenjangs
```

**Access:** Admin only

**Request Body:**
```json
{
  "code": "J2",
  "name": "Senior",
  "description": "Senior Level"
}
```

**Response:**
```json
{
  "id": "jenjang-id",
  "code": "J2",
  "name": "Senior",
  "description": "Senior Level",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

---

## Error Responses

### 401 Unauthorized
```json
{
  "error": "Unauthorized"
}
```

### 403 Forbidden
```json
{
  "error": "Forbidden"
}
```

### 404 Not Found
```json
{
  "error": "Not Found"
}
```

### 400 Bad Request
```json
{
  "error": "Invalid Request",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal Server Error"
}
```

---

## Rate Limiting

Currently no rate limiting is implemented. Consider adding rate limiting in production.

## Pagination

Endpoints that return lists support pagination:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10, max: 100)

## Filtering

Future enhancement: Add filtering capabilities to list endpoints.

## Sorting

Future enhancement: Add sorting capabilities to list endpoints.
