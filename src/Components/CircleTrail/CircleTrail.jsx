import React, { useEffect, useRef, useState } from "react";

const CircleTrail = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const circlesRef = useRef([]);
  
  const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e",
    "#ec805d", "#e36e5c", "#df685c", "#d5585c", "#d1525c",
    "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", "#9c155f",
    "#950f5f", "#830060", "#7c0060", "#680060", "#60005f",
    "#48005f", "#3d005e"
  ];

  useEffect(() => {
    // Update coordinates on mouse move
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          // Set position and scale based on index
          circle.style.left = `${x - 12}px`;
          circle.style.top = `${y - 12}px`;
          circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

          // Move towards the next circle
          const nextCircle = circlesRef.current[index + 1] || { x: coords.x, y: coords.y };
          x += (nextCircle.x - x) * 0.3;
          y += (nextCircle.y - y) * 0.3;

          // Store each circle's position
          circle.x = x;
          circle.y = y;
        }
      });

      requestAnimationFrame(animateCircles);
    };

    // Initialize circle positions
    circlesRef.current.forEach(circle => {
      if (circle) {
        circle.x = coords.x;
        circle.y = coords.y;
      }
    });

    animateCircles();
  }, [coords]);

  return (
    <div className="fixed inset-0 pointer-events-none -z-1">
      {Array.from({ length: 22 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            circlesRef.current[index] = el;
          }}
          style={{ backgroundColor: colors[index % colors.length] }}
          className="w-6 h-6 rounded-full absolute"
        />
      ))}
    </div>
  );
};

export default CircleTrail;
