// components/HomeFeed.js
import { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import Tweet from './Tweet';

export default function HomeFeed() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch tweets from the backend API
  useEffect(() => {
    async function fetchTweets() {
      try {
        const response = await fetch('http://localhost:8000/api/tweets');
        if (!response.ok) {
          throw new Error('Failed to fetch tweets');
        }
        const data = await response.json();
        setTweets(data); // Update the state with the fetched tweets
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading once the data is fetched or if an error occurs
      }
    }

    fetchTweets();
  }, []); // Empty dependency array to only run this once on mount

  const addTweet = (newTweet) => {
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  if (loading) {
    return <div>Loading tweets...</div>;
  }

  return (
    <div className="space-y-4">
      {/* TweetBox for writing a new tweet */}
      <TweetBox addTweet={addTweet} />

      {/* Map over the tweets and display them using the Tweet component */}
      {Array.isArray(tweets) && tweets.length > 0 ? (
        tweets.map((tweet) => (
          <Tweet key={tweet._id} tweet={tweet} /> // Ensure each tweet has a unique key (like _id)
        ))
      ) : (
        <div>No tweets available</div>
      )}
    </div>
  );
}
