## Code Crafters Project 
This is a simple Twitter clone built with Next.js and Node.js for the backend, using MongoDB for the database. The project includes features like posting tweets, displaying a user's profile, and viewing a feed of tweets.

Features
User can post a tweet

Tweets are displayed on the home feed

Profile page with user info and tweets

Built with Next.js, Tailwind CSS, Node.js, Express, and MongoDB

Prerequisites
Before running the app, make sure you have the following software installed:

Node.js (v14 or above)

npm or yarn (npm comes with Node.js)

MongoDB (Local setup or a cloud database)

Installation & Setup
1. Clone the Repository
Start by cloning the repository to your local machine:

bash
Copy
git clone https://github.com/yourusername/my-twitter-clone-next.git
cd my-twitter-clone-next
2. Backend Setup (Server)
a. Install Dependencies
In the backend folder, run the following command to install the required dependencies:

bash
Copy
cd backend
npm install
b. MongoDB Setup
Make sure you have MongoDB installed and running. You can use either a local MongoDB server or a cloud MongoDB instance (like MongoDB Atlas).

To run MongoDB locally:

Mac: If you're using Homebrew, run the following:

bash
Copy
brew services start mongodb-community@6.0
Windows: If you installed MongoDB via the installer, you can run it through Command Prompt or PowerShell by typing:

bash
Copy
mongod
If you're using MongoDB Atlas (cloud database), update the MongoDB connection string in backend/server.js with your Atlas connection URL.

c. Start the Backend Server
Once MongoDB is running, start the backend server:

bash
Copy
npm start
This will start the server on http://localhost:8000.

3. Frontend Setup (Next.js)
a. Install Dependencies
In the frontend folder, run the following command to install the required dependencies:

bash
Copy
cd frontend
npm install
b. Start the Frontend Server
To run the Next.js frontend:

bash
Copy
npm run dev
This will start the frontend development server on http://localhost:3000.

How to Use the App
Make sure both the backend and frontend servers are running.

Open your browser and navigate to http://localhost:3000 to view the Twitter clone.

Post a tweet by typing in the text box and clicking the Tweet button.

View the user's profile by visiting the Profile page.

Tweets will be displayed in the home feed, and they will also appear under the user's profile.

Troubleshooting
1. ECONNREFUSED error when connecting to MongoDB
This error usually means MongoDB isn't running or there is an issue with your connection string. Ensure MongoDB is running and you are connected to the right database.

For local MongoDB:
On Mac, make sure MongoDB is running with the brew services command.

On Windows, make sure MongoDB is running with mongod command in a separate terminal.

2. Missing .env File
If you have a .env file for secret keys, make sure it's in the backend folder. If not, you can create one like this:

bash
Copy
MONGO_URI=mongodb://localhost:27017/twitter_clone
Replace localhost with your MongoDB URI if using MongoDB Atlas or another hosted database.

Additional Features to Add (Future Ideas)
User authentication with JWT or OAuth

Image upload for profile pictures

Like and comment functionality for tweets

Follow/unfollow users functionality

Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. You can also open an issue if you encounter any bugs or have feature requests.

License
This project is licensed under the MIT License - see the LICENSE file for details.

Notes for Running on Different Systems
Mac OS
Ensure MongoDB is installed and running. You can install it using Homebrew if you haven't already:

bash
Copy
brew tap mongodb/brew
brew install mongodb-community@6.0
Start MongoDB using:

bash
Copy
brew services start mongodb/brew/mongodb-community
Run the backend with npm start inside the backend folder.

Run the frontend with npm run dev inside the frontend folder.

Windows
Download and install MongoDB from the official MongoDB website.

Run MongoDB using:

bash
Copy
mongod
Run the backend with npm start inside the backend folder.

Run the frontend with npm run dev inside the frontend folder.
