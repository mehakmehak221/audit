import { motion } from "motion/react";
import createProtocolLogo from "../../createprotocol.jpeg";
import superbowlLogo from "../../SUPERBOWL.png";

const logos = [
  { 
    name: "Create Protocol", 
    src: createProtocolLogo,
    height: "h-10 sm:h-12",
    width: "w-auto"
  },
  { 
    name: "Superbowl", 
    src: superbowlLogo,
    height: "h-8 sm:h-10",
    width: "w-auto"
  },
];

export function LogoCloud() {
  return (
    <div className="bg-black py-12 sm:py-16 relative overflow-hidden border-y border-gray-800/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* <h2 className="text-center text-[10px] sm:text-xs font-bold leading-8 text-gray-500 font-mono tracking-[0.3em] uppercase mb-10">
            Trust Partners
          </h2> */}
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-24">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                }}
                whileHover={{ y: -2 }}
                className="relative cursor-pointer transition-all duration-300"
              >
                <div className={`relative ${logo.height} ${logo.width} flex items-center justify-center`}>
                  <img
                    alt={logo.name}
                    src={logo.src}
                    className="max-h-full w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
