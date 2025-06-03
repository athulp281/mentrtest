'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const images = [
  '/assets/img/hero/slider-1.png',
  '/assets/img/hero/slider-2.png',
  '/assets/img/hero/slider-5.png',
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="position-relative"  style={{ height: '400px',overflow: 'visible' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="w-100 h-100 position-absolute top-0 start-0"
        >
          <Image
            src={images[current]}
            alt={`Slide ${current}`}
            // layout="fill"
            objectFit="cover"
            className="rounded-4"
            height={500}
            width={500}
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
