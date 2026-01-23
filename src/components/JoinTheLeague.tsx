import { motion } from "framer-motion";
const clients = ["Hi Living", "GATACA", "Secret Alchemist", "Chennai Super Champs", "Bengaluru Jawans", "Vilaasa Estates", "Lalteen", "Joyalukkas", "Liza", "Nura J"];
const JoinTheLeague = () => {
  return <section style={{
    backgroundColor: '#253e35'
  }} className="relative pt-0 pb-2 md:pb-20 px-4 overflow-hidden py-[21px]">
      <div className="max-w-6xl mx-auto">
        {/* Pill-shaped container */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="rounded-[40px] md:rounded-[60px] p-8 md:p-12 lg:p-16 overflow-hidden" style={{
        backgroundColor: '#F8FFE8',
        border: '3px solid #0a0a0a',
        boxShadow: '0 6px 0 #0a0a0a'
      }}>
          {/* Content layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
            {/* Left side - Title */}
            <div className="flex-shrink-0">
              <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight" style={{
              color: '#0a0a0a'
            }}>
                <span className="block">Join</span>
                <span className="block">the League</span>
              </h2>
            </div>

            {/* Right side - Marquee */}
            <div className="flex-1 overflow-hidden">
              <div className="relative">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F8FFE8] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F8FFE8] to-transparent z-10 pointer-events-none" />
                
                {/* Marquee track */}
                <div className="flex animate-marquee-reverse">
                  {[...clients, ...clients, ...clients].map((client, index) => <div key={index} className="flex-shrink-0 px-4 md:px-6">
                      <div className="px-6 py-3 rounded-full font-bricolage font-semibold text-sm md:text-base whitespace-nowrap" style={{
                    backgroundColor: '#e8f0d8',
                    color: '#0a0a0a',
                    border: '2px solid #0a0a0a'
                  }}>
                        {client}
                      </div>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default JoinTheLeague;