export const upVariants = {
  down: { y: 50, opacity: 0 },
  up: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

export const downVariants = {
  up: { y: -50, opacity: 0 },
  down: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
    },
  },
};

export const showVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.15,
      duration: 0.5,
    },
  },
};

export const popUpVariants = {
  small: { scale: 0.8, opacity: 0 },
  popped: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};

export const rightVariants = {
  left: { x: -20, opacity: 0 },
  right: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.2,
    },
  },
};
