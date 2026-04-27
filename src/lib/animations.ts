import type { Variants } from 'framer-motion';

// Easing functions
export const ease = {
  default: [0.4, 0, 0.2, 1],
  entrance: [0, 0, 0.2, 1],
  exit: [0.4, 0, 1, 1],
  bounce: [0.34, 1.56, 0.64, 1],
} as const;

// Durations (in seconds)
export const duration = {
  micro: 0.15,
  small: 0.2,
  medium: 0.3,
  large: 0.5,
  hero: 0.8,
} as const;

// Stagger delays
export const stagger = {
  fast: 0.05,
  default: 0.1,
  slow: 0.15,
} as const;

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.medium,
      ease: ease.default,
    },
  },
};

// Fade in from bottom
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.medium,
      ease: ease.default,
    },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.large,
      ease: ease.default,
    },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: duration.large,
      ease: ease.default,
    },
  },
};

// Scale fade in
export const scaleFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: duration.large,
      ease: ease.default,
    },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.default,
      delayChildren: 0.1,
    },
  },
};

// Stagger container fast
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.fast,
      delayChildren: 0.05,
    },
  },
};

// Stagger container slow
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger.slow,
      delayChildren: 0.2,
    },
  },
};

// Hero title animation
export const heroTitle: Variants = {
  hidden: { 
    opacity: 0, 
    clipPath: 'inset(100% 0 0 0)',
    y: 50 
  },
  visible: {
    opacity: 1,
    clipPath: 'inset(0% 0 0 0)',
    y: 0,
    transition: {
      duration: duration.hero,
      ease: ease.entrance,
    },
  },
};

// Hero background animation
export const heroBackground: Variants = {
  hidden: { scale: 1.05, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: ease.default,
    },
  },
};

// Card hover animation
export const cardHover = {
  rest: { y: 0, transition: { duration: duration.small, ease: ease.default } },
  hover: { y: -8, transition: { duration: duration.small, ease: ease.default } },
};

// Image hover animation
export const imageHover = {
  rest: { scale: 1, transition: { duration: duration.medium, ease: ease.default } },
  hover: { scale: 1.05, transition: { duration: duration.medium, ease: ease.default } },
};

// Button hover animation
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: duration.micro } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

// SVG line draw animation
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease: ease.default },
      opacity: { duration: 0.2 },
    },
  },
};

// Slide in from bottom with stagger
export const slideInBottom: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.large,
      ease: ease.entrance,
    },
  },
};
