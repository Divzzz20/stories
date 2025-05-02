# WebPe Dynamic Stories

A feature-rich web application for WebPe that showcases newly launched features through dynamic stories, built with the MERN stack (MongoDB, Express, React, and Node.js).

## Features

- User-facing interface displaying dynamic stories in a carousel format
- Admin panel for managing stories (create, read, update, delete)
- Responsive design that works on desktop, tablet, and mobile devices
- Secure API endpoints for data operations

## Tech Stack

- **Frontend**: React.js, React Bootstrap, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd webpe-stories
```

### 2. Setup for Development

```bash
# Install all dependencies (server, client, and root)
npm run install-dependencies

# Create a .env file in the server directory with the following content:
# MONGODB_URI=mongodb://localhost:27017/webpe_stories
# PORT=5000

# Run both frontend and backend in development mode
npm run dev
```

The server will run on http://localhost:5000 and the client on http://localhost:3000.

### 3. Setup for Production (Single Server Deployment)

```bash
# Install all dependencies
npm run install-dependencies

# Build the React frontend
npm run build

# Start the application in production mode
# For Linux/Mac
npm run prod

# For Windows
npm run prod-windows
```

In production mode, the Express server will serve both the API endpoints and the React static files from a single server.

## Deployment

### Deploying to a VPS or Dedicated Server

1. Clone the repository on your server
2. Install dependencies: `npm run install-dependencies`
3. Create a `.env` file in the server directory with your MongoDB connection string and other environment variables
4. Build the React frontend: `npm run build`
5. Start the server in production mode: `npm run prod`
6. For production deployment, consider using a process manager like PM2:
   ```
   npm install -g pm2
   pm2 start server/server.js --name "webpe-stories" -- --node-args="--env=production"
   ```

### Deploying to Heroku

1. Create a Heroku account and install the Heroku CLI
2. Create a new Heroku app: `heroku create webpe-stories`
3. Add MongoDB add-on or set the MONGODB_URI config var pointing to your MongoDB instance:
   ```
   heroku config:set MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
   ```
4. Push to Heroku: `git push heroku main`
5. The app will automatically build and run using the heroku-postbuild script

## Usage

### User View
- Visit the home page to see the user-facing stories display
- Browse through available stories using the carousel navigation
- Click on CTA buttons to learn more about features

### Admin Panel
- Visit the /admin route to access the admin panel
- View all stories in a table format with options to edit or delete
- Create new stories using the "Create Story" button
- Edit existing stories by clicking the edit button in the table

## Project Structure

```
project-root/
├── client/                 # React frontend
│   ├── public/             # Static files
│   └── src/                # React source files
│       ├── components/     # Reusable components
│       ├── screens/        # Page components
│       └── services/       # API service files
│       
└── server/                 # Node.js backend
    ├── config/             # Configuration files
    ├── controllers/        # API controllers
    ├── models/             # MongoDB models
    └── routes/             # API routes
```

## License

This project is licensed under the MIT License. 