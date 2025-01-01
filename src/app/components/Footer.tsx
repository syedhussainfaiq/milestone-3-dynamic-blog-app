const Footer = () => {
    return (
      <footer className="py-4 sm:py-6 bg-gradient-to-r from-black/70 via-gray-900 to-black/70 w-full text-center text-gray-300 text-sm sm:text-base">
        <div className="container mx-auto px-4">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved for My Blog.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  