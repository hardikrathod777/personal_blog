# Personal Blog App

A minimalistic and user-friendly blog platform where users can create, view, edit, and delete blog posts. The application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and is deployed on Vercel.

## Features

- **Create Post:** Users can add a new blog post with a title and content.
- **View All Posts:** Browse a list of all blog posts, sorted in reverse chronological order.
- **View Post Details:** Click on a post to view its full content and the date it was posted.
- **Edit Post:** Modify a post's title and content.
- **Delete Post:** Remove a blog post from the list.
- **Clean UI:** A minimal interface focusing on readability and usability.

## Tech Stack

### Frontend:

- **React.js:** Component-based UI development
- **Context API:** For state management
- **Axios:** To interact with the backend API

### Backend:

- **Node.js:** Server-side JavaScript runtime
- **Express.js:** Web framework for API creation
- **MongoDB:** NoSQL database for storing blog data
- **Mongoose:** For defining MongoDB schemas

### Deployment:

- **Vercel:** Deployment platform for both frontend and backend.

## Screenshots

- **Browse all posts** with an easy-to-navigate interface.
- **View full blog content** with the date of posting.
- **Create or edit a post** with a user-friendly form.

## Getting Started

### Prerequisites

To get started, ensure you have the following installed:

- **Node.js** (v14+)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hardikrathod777/personal_blog.git
   cd personal_blog

2. **Install dependencies for both frontend and backend:**

     ```bash
     # Install frontend dependencies
    cd frontend
    npm install
    
    # Install backend dependencies
    cd ../backend
    npm install

3. **Set up environment variables:**
    In the backend directory, create a .env file with the following content:
     ```bash
     MONGODB_URI=your-mongodb-uri
     PORT=5000
     DB_USERNAME=db_name
     DB_PASSWORD=db_pass
     ACCESS_SECRET_KEY=a_key
     REFRESH_SECRET_KEY=r_key

### Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
    npm run dev

2. **Start the frontend React app:**
 ```bash
 cd frontend
  npm start
  ```

The backend will run on **http://localhost:5000** and the frontend on **http://localhost:3000**.

### API Endpoints

GET /api/posts: Fetch all blog posts
GET /api/posts/
: Fetch a single post by its ID
POST /api/posts: Create a new post
PUT /api/posts/
: Update an existing post
DELETE /api/posts/
: Delete a post

    

     

