// Load environment variables from .env file
require('dotenv').config();

// Import necessary libraries
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // For parsing application/json
app.use(cors()); // Enable CORS for all origins (adjust if necessary)

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/twitter_clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Tweet Schema & Model
const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    maxlength: 280, // Optional: Limit tweet to 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Number,
    default: 0,
  },
  stars: {
    type: Number,
    default: 0,
  },
  claps: {
    type: Number,
    default: 0,
  },
});

const Tweet = mongoose.model('Tweet', tweetSchema);

// Routes

// GET all tweets
app.get('/api/tweets', async (req, res) => {
  try {
    const tweets = await Tweet.find().sort({ createdAt: -1 }); // Sort by most recent
    res.json(tweets); // Send the tweets as a response
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tweets' });
  }
});

// POST a new tweet
app.post('/api/tweets', async (req, res) => {
  const { content } = req.body;
  if (!content || content.trim() === '') {
    return res.status(400).json({ message: 'Tweet content is required' });
  }

  try {
    const newTweet = new Tweet({ content });
    await newTweet.save();
    res.status(201).json(newTweet); // Send the newly created tweet as a response
  } catch (error) {
    res.status(500).json({ message: 'Error posting tweet' });
  }
});

// PATCH /api/tweets/:id to handle reactions (like, star, clap)
app.patch('/api/tweets/:id', async (req, res) => {
  const { reactionType } = req.body; // reactionType will be like, star, or clap

  if (!reactionType) {
    return res.status(400).json({ message: 'Reaction type is required' });
  }

  try {
    // Find the tweet by ID
    const tweet = await Tweet.findById(req.params.id);

    if (!tweet) {
      return res.status(404).json({ message: 'Tweet not found' });
    }

    // Increment the appropriate reaction count
    if (reactionType === 'like') {
      tweet.likes += 1;
    } else if (reactionType === 'star') {
      tweet.stars += 1;
    } else if (reactionType === 'clap') {
      tweet.claps += 1;
    } else {
      return res.status(400).json({ message: 'Invalid reaction type' });
    }

    // Save the updated tweet
    const updatedTweet = await tweet.save();

    res.status(200).json(updatedTweet); // Return the updated tweet
  } catch (error) {
    console.error('Error updating tweet reaction:', error);
    res.status(500).json({ message: 'Error updating reaction' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
