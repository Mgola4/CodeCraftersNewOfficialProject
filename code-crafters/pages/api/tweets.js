import dbConnect from "@/utils/dbConnect";
import Tweet from "@/models/Tweet";

export default async function handler(req, res) {
  await dbConnect(); // Connect to MongoDB

  if (req.method === "GET") {
    const { username } = req.query;
    const query = username ? { username } : {};
    const tweets = await Tweet.find(query).sort({ createdAt: -1 });
    return res.status(200).json(tweets);
  }

  if (req.method === "POST") {
    const { username, content } = req.body;
    if (!username || !content) return res.status(400).json({ error: "Username and content are required" });

    const newTweet = new Tweet({ username, content });
    await newTweet.save();
    return res.status(201).json(newTweet);
  }

  return res.status(405).json({ error: "Method Not Allowed" });
}
