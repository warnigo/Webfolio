export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.5,
    },
  },
}
