// components/Profile.js
import { useState, useEffect } from 'react';

export default function Profile() {
  // Example user data (you would likely fetch this from an API or backend)
  const [user, setUser] = useState({
    username: 'user1',
    avatar: '/path/to/avatar.jpg', // Replace with actual avatar URL
    bio: 'Loving life and coding!',
  });
  
  const [tweets, setTweets] = useState([]);

  // Fetch the user's tweets (replace with an actual API call in a real app)
  useEffect(() => {
    // Example tweets fetched (would be replaced with actual API call to get tweets)
    setTweets([
      { id: 1, content: 'This is my first tweet!', likes: 10 },
      { id: 2, content: 'Learning React is fun!', likes: 15 },
      { id: 3, content: 'Next.js is amazing!', likes: 12 },
    ]);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Profile Header */}
      <div className="flex items-center space-x-4 border-b pb-4 mb-4">
        <img
          src={user.avatar}
          alt="Profile Avatar"
          className="w-20 h-20 rounded-full border-4 border-white shadow-md"
        />
        <div>
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-gray-500">{user.bio}</p>
        </div>
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-end mb-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
          Edit Profile
        </button>
      </div>

      {/* Tweets Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Tweets</h2>
        {tweets.length === 0 ? (
          <p>No tweets yet.</p>
        ) : (
          tweets.map((tweet) => (
            <div key={tweet.id} className="border-b py-3">
              <p>{tweet.content}</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-gray-600 text-sm">{tweet.likes} Likes</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
