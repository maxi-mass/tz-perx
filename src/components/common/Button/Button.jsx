import React from "react";
import styles from "./Button.module.css";

const Button = ({ onPress, color, text }) => {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        borderRadius: "5px",
        display: "inline-block"
      }}
      onClick={onPress}
    >
      <button style={{ color: color || "#283593" }} className={styles.button}>
        {text}
      </button>
    </div>
  );
};

export default Button;
