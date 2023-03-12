import { motion, variants } from "framer-motion";

const asd = {
  beginning: () => ({ y: window.innerHeight }),
  middle: () => ({ y: 0 }),
  end: () => ({ y: -window.innerHeight }),
};

export function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={asd}
      initial="beginning"
      animate="middle"
      exit="end"
      className="AnimNavbar-container"
    >
      {children}
    </motion.div>
  );
}
