import { useEffect } from "react";

export const useAnimateObjects = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      document.querySelectorAll<HTMLElement>("#object").forEach((move) => {
        const movingValue = parseInt(move.getAttribute("data-value") || "0");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    });
  }, []);
};
