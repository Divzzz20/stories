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
