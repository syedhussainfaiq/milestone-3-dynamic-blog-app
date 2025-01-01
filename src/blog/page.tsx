export default function BlogPage() {
    const blogs = [
      {
        title: "The Joy of Small Wins",
        path: "the-joy-of-small-wins",
        image: "/images/small-blog.jpg",
        description: "Discover how celebrating small achievements can lead to greater happiness and motivation.",
      },
      {
        title: "Finding Beauty in Imperfection",
        path: "finding-beauty-in-imperfection",
        image: "/images/finding-blog.webp",
        description: "Learn how embracing flaws can boost self-confidence and creativity.",
      },
      {
        title: "The Power of Gratitude",
        path: "the-power-of-gratitude",
        image: "/images/giving-blog.jpg",
        description: "Understand how practicing gratitude daily can transform your mindset and relationships.",
      },
      {
          title: "Digital Detox Diaries",
          path: "digital-detox-diaries",
          image: "/images/detox-blog.jpeg",
          description: "Why taking a break from screens can refresh your mind and improve productivity.",
        },
        {
          title: "Stories of Kindness",
          path: "stories-of-kindness",
          image: "/images/kidney-blog.jpg",
          description: "Inspiring real-life tales of people spreading kindness and making a difference.",
        },
        {
          title: "Chasing Your Dreams",
          path: "chasing-your-dreams",
          image: "/images/chasing-blog.png",
          description: "Practical steps and motivation to turn your passions into reality.",
        },
        {
          title: "Lessons from Nature",
          path: "lessons-from-nature",
          image: "/images/lesson-blog.jpg",
          description: "Explore how spending time in nature can teach us valuable life lessons.",
        },
        {
          title: "Unplugged Conversations",
          path: "unplugged-conversations",
          image: "/images/conver-blog.jpg",
          description: "Benefits of having meaningful, distraction-free talks with loved ones.",
        },
        {
          title: "Embracing Change",
          path: "embracing-change",
          image: "/images/emb-blog.jpeg",
          description: "Learn how adapting to change can lead to personal growth and new opportunities.",
        }
    ];
  
    return (
      <div>
  
        <div className="container mx-auto p-6 pt-32 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-10">Newest Insights</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <a
                key={blog.path}
                href={`/blog/${blog.path}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="h-56 bg-cover bg-center"
                 style={{ backgroundImage: `url(${blog.image})` }}></div>
                <div className="p-4 text-gray-800">
                  <h3 className="text-xl font-bold group-hover:text-blue-600">{blog.title}</h3>
                  <p className="mt-2 text-gray-600">{blog.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
  
     
      </div>
    
      
    );
  }
  
  