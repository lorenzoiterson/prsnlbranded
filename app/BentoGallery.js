"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 16 },
  },
};

function ImageModal({ item, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bento-modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 18 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.92, y: 18 }}
        className="bento-modal-inner"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.url} alt={item.title} className="bento-modal-img" />
        <div className="bento-modal-cap">
          <div className="bento-modal-t">{item.title}</div>
          <div className="bento-modal-d">{item.desc}</div>
        </div>
      </motion.div>
      <button className="bento-modal-close" onClick={onClose} aria-label="Close">×</button>
    </motion.div>
  );
}

export default function BentoGallery({ imageItems }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [dragConstraint, setDragConstraint] = useState(0);
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const calc = () => {
      if (gridRef.current && containerRef.current) {
        const cw = containerRef.current.offsetWidth;
        const gw = gridRef.current.scrollWidth;
        setDragConstraint(Math.min(0, cw - gw - 24));
      }
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [imageItems]);

  return (
    <div className="bento-wrap">
      <div ref={containerRef} className="bento-track">
        <motion.div
          className="bento-drag"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
          dragElastic={0.05}
        >
          <motion.div
            ref={gridRef}
            className="bento-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {imageItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bento-cell"
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
                tabIndex={0}
                aria-label={`View ${item.title}`}
              >
                <img src={item.url} alt={item.title} className="bento-img" />
                <div className="bento-overlay" />
                <div className="bento-cap">
                  <div className="bento-cap-t">{item.title}</div>
                  <div className="bento-cap-d">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <div className="bento-hint">Drag to explore · Tap to expand</div>

      <AnimatePresence>
        {selectedItem && (
          <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
