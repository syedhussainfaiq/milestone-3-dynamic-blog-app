import Image from "next/image";
import Link from 'next/link'; // Import Link

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      <div className="absolute inset-0 -z-10">
        <Image 
          src="/images/blog-home.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg mb-6">
        &quot;Unlock the World of Inspiration!&quot;
      </p>
     <Link href="/blog"
         className="px-6 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-200 mb-6">
          Read Our Blog
          
      </Link>
         <a/>
      <div className="flex justify-center gap-6">
        <a href="https://www.linkedin.com/in/asiya-irfan-9b4a332b6/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition duration-300"
        >
          <i className="fab fa-linkedin-in text-3xl"></i>
        </a>

        <a href="https://github.com/AsiyaIrfan234"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-400 transition duration-300"
        >
          <i className="fab fa-github text-3xl"></i>
        </a>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
        />
      </div>
    </div>
  );
}

export default Hero;
