import React, { useEffect } from "react";
import "./WidgetWrapper.css";

function WidgetWrapper(props) {
  const { src, className } = props;

  useEffect(() => {
    var image = document.querySelectorAll(".screenshot-2023-05-20-225713-1");
    new window.simpleParallax(image, {
      orientation: "up",
      scale: 3.2,
      overflow: true,
      delay: 0.4,
      transition: "cubic-bezier(0.25,0.1,0.25,1)",
    });
  }, []);

  return (
    <div className={`widget-wrapper ${className || ""}`}>
      <img className="screenshot-2023-05-20-225713-1" src={src} alt="Screenshot 2023-05-20 225713 1" />
    </div>
  );
}

export default WidgetWrapper;
