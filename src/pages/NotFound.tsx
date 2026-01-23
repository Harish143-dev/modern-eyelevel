import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#253e35' }}>
      <Header />
      
      <div className="flex min-h-screen items-center justify-center px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 text-[120px] md:text-[180px] font-dela leading-none"
            style={{ color: '#d0e999' }}
          >
            404
          </motion.h1>
          
          <h2 className="mb-4 text-3xl md:text-4xl font-dela" style={{ color: '#F8FFE8' }}>
            Page Not Found
          </h2>
          
          <p className="mb-8 text-lg font-bricolage" style={{ color: 'rgba(248, 255, 232, 0.7)' }}>
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back on track.
          </p>
          
          <Link to="/">
            <Button 
              size="lg"
              className="group rounded-full px-8 py-6 font-semibold font-bricolage hover:translate-y-1 hover:shadow-none transition-all duration-150"
              style={{
                backgroundColor: '#d0e999',
                color: '#0a0a0a',
                border: '3px solid #0a0a0a',
                boxShadow: '0 4px 0 #0a0a0a'
              }}
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;