import React from "react";
import "./Munchai.css";

function Munchai(props) {
  const { children } = props;

  return (
    <div className="munchai-1">
      <div className="munchai-2">{children}</div>
    </div>
  );
}

export default Munchai;
