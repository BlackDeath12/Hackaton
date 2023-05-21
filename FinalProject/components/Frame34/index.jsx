import React, { useEffect } from "react";
import "./Frame34.css";

function Frame34(props) {
  const { src, className } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".screenshot-2023-05-20-214441-2");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 3.2,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
  }, []);

  return (
    <div className={`frame-34 ${className || ""}`}>
      <div className="widget-wrapper">
        <img className="screenshot-2023-05-20-214441-2" src={src} alt="Screenshot 2023-05-20 214441 2" />
      </div>
    </div>
  );
}

export default Frame34;
