import { motion } from "framer-motion";

export const StarRain = () => {
  const stars = Array.from({ length: 50 }, (_, i) => i);
  const icons = ["⭐", "./hellokitty.svg"];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {stars.map((star) => {
        const isHelloKitty = Math.random() > 0.5;
        return (
          <motion.div
            key={star}
            className={`absolute ${isHelloKitty ? "w-8 h-8" : "text-2xl"}`}
            initial={{
              opacity: 0,
              x: Math.random() * window.innerWidth,
              y: -10,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              y: window.innerHeight + 10,
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {isHelloKitty ? (
              <img src={icons[1]} alt="Hello Kitty" className="w-full h-full" />
            ) : (
              icons[0]
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
