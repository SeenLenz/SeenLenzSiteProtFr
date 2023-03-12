import { motion, variants } from "framer-motion";

const asd = {
  beginning: () => ({ x: window.innerWidth }),
  middle: () => ({ x: 0 }),
  end: () => ({ x: -window.innerWidth }),
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
