import { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";

const items = ["A", "B", "C", "D", "E"];

export default function ReorderComponent() {
  const [order, setOrder] = useState(items);
  const [isDragging, setIsDragging] = useState(false);
  const [toggle, cycle] = useCycle(true, false);

  const handleClick = (index) => {
    if (!isDragging) {
      const newOrder = [...order];
      const temp = newOrder[index];
      newOrder[index] = newOrder[index - 1];
      newOrder[index - 1] = temp;
      setOrder(newOrder);
      cycle();
    }
  };

  return (
    <div>
      <AnimatePresence>
        {order.map((item, index) => (
          <motion.div
            key={item}
            style={{ cursor: "pointer" }}
            layout
            drag={isDragging ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            onClick={() => handleClick(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            positionTransition={{
              duration: 0.3,
              type: toggle ? "tween" : "spring",
            }}
          >
            {item}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
