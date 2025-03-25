import React, { useState, useEffect } from "react"; // ✅ Import useState & useEffect
import axios from "axios";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import TweetBox from "@/components/Layout/TweetBox";
import HomeFeed from "@/components/Layout/HomeFeed";
import Tweet from "@/components/Layout/Tweet";
import Profile from "@/components/Layout/Profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [tweets, setTweets] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:5000/api/tweets")
        .then(response => setTweets(response.data))
        .catch(error => console.error("Error fetching tweets:", error));
      }, []);

  return (
    <div className="">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <HomeFeed tweets={tweets} setTweets={setTweets} />
      </div>
    </div>
  );
}
