# Plasma Donor App

## Overview

Plasma Donor App is a web application that facilitates the process of plasma donation. The app allows users to sign up as regular users or administrators. Regular users can view their own donation details, while administrators can manage the plasma donation requests submitted by users.

The app is divided into two main components:

1. **Client Folder**: Contains the frontend of the application.

2. **Server Folder**: Contains the backend of the application.

## Client Folder

### Frontend

The frontend of the application is developed using modern web technologies like HTML, CSS, and JavaScript. It consists of the following components:

1. **Login and Sign-up**: Separate components for user and admin login and sign-up functionalities.

2. **Landing Page**: Component that serves as the entry point of the application, providing an overview of the app's features and benefits.

3. **User Details View (Plasma Donation Component)**: Component that allows users to view their plasma donation details.

4. **Admin View (Donation Table)**: Component that provides administrators with a table displaying plasma donation requests. Administrators can approve or reject these requests.

## Server Folder

### Backend

The backend of the application handles data processing and communication with the database. It is built using Node.js and Express.js, providing RESTful API endpoints for the frontend to interact with. The backend is organized as follows:

1. **Routes**: Contains separate route handlers for different functionalities:
   - `/api/user`: Handles user registration and login.
   - `/api/admin`: Handles admin registration and login.
   - `/api/donations`: Manages the details of plasma donations submitted by users.
   - `/api/status`: Provides status information on plasma donation requests.

2. **User Registration/Login**: Contains files responsible for user authentication and user-related functionalities.

3. **Admin Registration/Login**: Contains files related to admin authentication and admin-specific features.

4. **Donor Details and Status**: Contains files handling the storage and retrieval of plasma donor details and donation statuses.

## How to Run the App

To run the Plasma Donor App, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the `client` folder and run the following commands:
   ```bash
   # Install frontend dependencies
   npm install

   # Run the frontend application
   npm start
   ```

3. Navigate to the `server` folder and run the following commands:
   ```bash
   # Install backend dependencies
   npm install

   # Run the backend server
   npm start
   ```

4. Access the application in your web browser by visiting `http://localhost:4200`.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB (not mentioned but assumed based on the backend requirements)

## Contributors

- Chitrala.Sai Siddharth Kumar

## License

This project is licensed under the [MIT License](link-to-license). (Replace "link-to-license" with the actual link to the license file)

## Acknowledgments

Special thanks to [Any additional contributors or resources you want to mention].
