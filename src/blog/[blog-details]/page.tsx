"use client"
import { useState } from "react";
import { PageProps } from "../../../.next/types/app/layout";

type BlogProps = PageProps & {
  params: { 
    "blog-details": string 
  };
};

const blogData: Record<string, { title: string; content: string }> = {
  "the-joy-of-small-wins": {
    title: "The Joy of Small Wins",
    content:
      "🌟 Every small achievement is a step toward greatness! Celebrate your victories, no matter how tiny, and watch how they boost your motivation and happiness. 🎉 Small wins pave the way for bigger successes, reminding us that progress is the real reward. 💪",
  },
  "finding-beauty-in-imperfection": {
    title: "Finding Beauty in Imperfection",
    content:
      "✨ Embrace the beauty of imperfection and discover how flaws make life unique and meaningful. 🌈 Learn to accept yourself fully, boost your confidence, and unlock creativity by finding charm in what’s imperfectly perfect. 🌿",
  },
  "the-power-of-gratitude": {
    title: "The Power of Gratitude",
    content:
      "🙏 Transform your life by practicing daily gratitude! Reflect on the blessings around you, nurture positivity, and build stronger relationships. 🌟 Gratitude unlocks a mindset of abundance, creating lasting peace and joy. 💖",
  },
  "digital-detox-diaries": {
    title: "Digital Detox Diaries",
    content:
      "📵 Step away from screens and reconnect with the world around you. 🌿 Discover the rejuvenating benefits of a digital detox, from improved mental clarity to meaningful connections. Embrace balance and productivity with time offline. 🌟",
  },
  "stories-of-kindness": {
    title: "Stories of Kindness",
    content:
      "💖 Kindness changes lives! Read inspiring stories of people spreading love and compassion through simple, selfless acts. 🌈 Together, we can make the world a better place, one kind gesture at a time. 🌟",
  },
  "chasing-your-dreams": {
    title: "Chasing Your Dreams",
    content:
      "🚀 Follow your passions and turn dreams into reality! Take actionable steps, stay determined, and let your vision guide you toward success. 🌟 Dream big, work hard, and embrace the journey to achieve what truly matters. 🌈",
  },
  "lessons-from-nature": {
    title: "Lessons from Nature",
    content:
      "🌳 Nature teaches us patience, balance, and resilience. Whether it's the quiet strength of trees or the flow of rivers, every element offers a valuable life lesson. 🌿 Explore the wisdom of nature and find inspiration in its simplicity. 🌟",
  },
  "unplugged-conversations": {
    title: "Unplugged Conversations",
    content:
      "🗨️ Dive into distraction-free, meaningful conversations. Strengthen your bonds with loved ones by giving them your full attention. 🌟 In a world filled with noise, authentic communication is the key to deeper relationships. 💖",
  },
  "embracing-change": {
    title: "Embracing Change",
    content:
      "🌟 Change is the only constant, and embracing it opens the door to growth and opportunities. Learn how to adapt, stay positive, and thrive in an ever-evolving world. 💪 Let change inspire you to reach new heights. 🚀",
  },
};

export default function BlogPost({ params }: BlogProps) {
  const { "blog-details": path } = params;
  const blog = blogData[path];

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">Blog not found</h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white flex justify-start items-center px-4 sm:px-8 lg:px-16 mt-8"
      style={{ backgroundImage: "url('/images/blog-pic.webp')" }}
    >
      <div className="max-w-4xl w-full bg-blue-600/50 sm:p-8 p-6 rounded-2xl shadow-xl backdrop-blur-xl">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-gradient bg-clip-text text-transparent mb-6 sm:mb-8">
          {blog.title}
        </h1>
        <p className="mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-100">
          {blog.content}
        </p>

        <div className="mt-6 sm:mt-8 bg-blue-600/70 p-6 sm:p-8 rounded-lg backdrop-blur-xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-6 sm:mb-8">
            Comments
          </h2>
          <div className="mb-6">
            {comments.length === 0 ? (
              <p className="text-gray-300 italic">
                Be the first to comment and share your thoughts!
              </p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li
                    key={index}
                    className="border-b border-gray-300 py-3 text-gray-200"
                  >
                    {comment}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write a comment..."
              className="text-black flex-1 px-4 sm:px-6 py-3 border-2 border-gray-400 rounded-xl focus:outline-none sm:w-96 w-full"
            />
            <button
              onClick={handleAddComment}
              className="mt-4 sm:mt-0 px-6 sm:px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Add Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
