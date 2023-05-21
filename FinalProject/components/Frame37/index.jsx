import React, { useEffect } from "react";
import "./Frame37.css";

function Frame37(props) {
  const { src, className } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".screenshot-2023-05-20-225638-1");
    new window.simpleParallax(image, {
      orientation: "up left",
      scale: 2.6,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
  }, []);

  return (
    <div className={`frame-37 ${className || ""}`}>
      <div className="widget-wrapper-1">
        <img className="screenshot-2023-05-20-225638-1" src={src} alt="Screenshot 2023-05-20 225638 1" />
      </div>
    </div>
  );
}

export default Frame37;
