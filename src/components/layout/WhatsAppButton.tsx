import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor">
    <path d="M16 .396C7.163.396 0 7.558 0 16.396c0 2.893.756 5.612 2.076 7.97L.396 32l7.823-1.64a15.93 15.93 0 0 0 7.777 2.01c8.837 0 16-7.162 16-16S24.837.396 16 .396zm0 29.23c-2.49 0-4.805-.728-6.75-1.98l-.482-.305-4.642.972.986-4.52-.314-.467a13.18 13.18 0 0 1-2.046-7.03c0-7.308 5.94-13.247 13.248-13.247 7.308 0 13.247 5.94 13.247 13.247S23.308 29.626 16 29.626zm7.29-9.88c-.4-.2-2.37-1.17-2.737-1.303-.366-.134-.633-.2-.9.2-.266.4-1.033 1.303-1.266 1.57-.233.267-.466.3-.866.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.06-1.993-2.37-2.226-2.77-.233-.4-.025-.616.175-.816.18-.18.4-.466.6-.7.2-.233.266-.4.4-.667.133-.266.066-.5-.033-.7-.1-.2-.9-2.17-1.233-2.97-.325-.78-.655-.675-.9-.688-.233-.01-.5-.013-.766-.013s-.7.1-1.066.5c-.366.4-1.4 1.366-1.4 3.333 0 1.967 1.433 3.867 1.633 4.133.2.267 2.82 4.3 6.833 6.033.955.412 1.7.658 2.28.842.958.305 1.83.262 2.52.159.77-.115 2.37-.967 2.704-1.9.333-.933.333-1.733.233-1.9-.1-.166-.366-.266-.766-.466z" />
  </svg>
);

const WhatsAppButton = () => {
  const phoneNumber = "919789099499";
  const message =
    "Hi! I'm interested in learning more about Eyelevel Studio's services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed left-6 bottom-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer"
      style={{
        backgroundColor: "#25D366",
        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.6)",
      }}
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon />

      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{ backgroundColor: "#25D366" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.a>
  );
};

export default WhatsAppButton;
