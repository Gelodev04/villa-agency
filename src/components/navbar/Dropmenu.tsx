import { motion } from "framer-motion";

export default function Dropmenu() {
  const menuItems = [
    { item: "Home", url: "/" },
    { item: "Properties", url: "/" },
    { item: "Property Details", url: "/" },
    { item: "Contact Us", url: "/" },
  ];

  // Parent container animation
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: -8,
      transition: {
        staggerChildren: 0.15, // Delay each item by 0.15s
      },
    },
  };

  // Individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="px-5 font-poppins absolute z-[9999] w-full"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={menuVariants}
    >
      <div className="max-w-[600px] h-auto mx-auto  shadow-lg ">
        {menuItems.map((items, index) => (
          <motion.div
            key={index}
            className="text-center border-t py-3 bg-white"
            variants={itemVariants}
          >
            <p>{items.item}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
