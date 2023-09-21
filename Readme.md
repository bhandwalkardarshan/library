# Library Management System
The Library Management System is a Node.js-based backend application that provides functionalities for managing library resources, user registration, and user authentication. It offers CRUD operations for library resources and user management with secure password hashing and JWT token-based authentication.

## Features
- **User Registration**: Allows users to register by providing their name, email, and password. Passwords are securely hashed before storage.
- **User Login**: Provides a login endpoint where users can authenticate using their email and password. A JWT (JSON Web Token) is generated upon successful login.
- **Library Resource Management**: Supports CRUD operations for library resources, including creating, reading, updating, and deleting resource information.
- **Booking Management**: Supports booking operations, allowing users to place bookings for library resources.
## Technologies Used
- Node.js: Server-side JavaScript runtime environment.
- Express.js: Web application framework for building APIs.
- MongoDB: NoSQL database used for storing library resource, user, and booking data.
- Mongoose: MongoDB object modeling tool for Node.js.
- Bcrypt: Library for hashing passwords securely.
- JSON Web Tokens (JWT): Used for user authentication and token generation.
- dotenv: Package for loading environment variables from a .env file.
### Installation

1. Clone the repository:

   ```bash
   https://github.com/bhandwalkardarshan/library
   cd library
2. Install dependencies:

    ```bash
    npm install 
3. Create a .env file in the project root directory and add your configuration settings:

    ```bash
    JWT_SECRET=your-secret-key-here
    MONGO_URL=mongodb://localhost:27017/your-database-name
3. Start the application:

    ```bash
    npm start
The application will be accessible at http://localhost:3000.

## API Endpoints
- User Registration (POST): /api/users/register - User registration endpoint.
- User Login (POST): /api/users/login - User login endpoint to obtain a JWT token.
- Library Resource (GET, POST): /api/resources - List all available library resources or create a new resource.
- Library Resource (GET, PUT, DELETE): /api/resources/:id - Retrieve, update, or delete a specific library resource by ID.
- Bookings (GET, POST): /api/bookings - List all bookings or create a new booking.
- Bookings (GET, PUT, DELETE): /api/bookings/:id - Retrieve, update, or delete a specific booking by ID.
### Usage
You can use tools like Postman or any REST client to interact with the API endpoints. Make sure to include the necessary headers and request data as per the API documentation.
