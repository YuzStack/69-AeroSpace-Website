// eslint-disable-next-line
import { motion } from 'motion/react';

export default function AnimationLayout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className='flex w-full grow flex-col'
    >
      {children}
    </motion.div>
  );
}
