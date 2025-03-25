// components/TweetBox.js
import { useState } from 'react';

export default function TweetBox({ addTweet }) {
  const [content, setContent] = useState('');

  const handleTweetSubmit = async (e) => {
    e.preventDefault();

    if (content.trim() === '') {
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/tweets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error('Failed to post tweet');
      }

      const newTweet = await response.json();
      
      // Add the new tweet to the parent component (HomeFeed)
      addTweet(newTweet);

      // Clear the tweet input after submission
      setContent('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-15 border-b p-4">
      <form onSubmit={handleTweetSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="What's happening?"
          rows="4"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded-md"
        >
          Tweet
        </button>
      </form>
    </div>
  );
}
