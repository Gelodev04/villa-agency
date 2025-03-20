import { motion } from "framer-motion";

export default function Dropmenu({navItems}: any) {
 

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
        {navItems.map((items: any, index: number) => (
          <motion.div
            key={index}
            className="text-center border-t py-3 bg-white"
            variants={itemVariants}
          >
            <a href={items.href}>
              <p className="cursor-pointer hover:text-main duration-100 ease-out">{items.label}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
