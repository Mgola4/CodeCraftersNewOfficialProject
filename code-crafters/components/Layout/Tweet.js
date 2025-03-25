import { useState } from 'react';

export default function Tweet({ tweet }) {
  const [likes, setLikes] = useState(tweet.likes);
  const [stars, setStars] = useState(tweet.stars);
  const [claps, setClaps] = useState(tweet.claps);

  const handleReaction = async (reactionType) => {
    try {
      const response = await fetch(`http://localhost:8000/api/tweets/${tweet._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reactionType }),
      });

      if (!response.ok) {
        throw new Error('Failed to update reaction');
      }

      const updatedTweet = await response.json();

      // Update the local state with the new counts
      if (reactionType === 'like') {
        setLikes(updatedTweet.likes);
      } else if (reactionType === 'star') {
        setStars(updatedTweet.stars);
      } else if (reactionType === 'clap') {
        setClaps(updatedTweet.claps);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="tweet p-4 border-b" style={{ borderColor: '#4CAF50', borderWidth: '2px', borderRadius: '8px' }}>
      {/* Tweet Content */}
      <p>{tweet.content}</p>

      <div className="flex justify-between items-center mt-2">
        {/* Timestamp */}
        <span className="text-gray-500 text-sm">{new Date(tweet.createdAt).toLocaleString()}</span>

        {/* Emoji reactions with counts to the right of the timestamp */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => handleReaction('like')}
            className="flex items-center space-x-1 text-gray-600"
          >
            <span role="img" aria-label="like">👍</span>
            <span>{likes}</span>
          </button>
          <button
            onClick={() => handleReaction('star')}
            className="flex items-center space-x-1 text-yellow-600"
          >
            <span role="img" aria-label="star">⭐</span>
            <span>{stars}</span>
          </button>
          <button
            onClick={() => handleReaction('clap')}
            className="flex items-center space-x-1 text-green-600"
          >
            <span role="img" aria-label="clap">👏</span>
            <span>{claps}</span>
          </button>
        </div>
      </div>

      {/* Border under the tweet content */}
      <hr />
    </div>
  );
}
