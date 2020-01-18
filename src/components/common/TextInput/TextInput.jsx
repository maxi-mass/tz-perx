import React from "react";
import styles from "./TextInput.module.css";

const TextInput = ({ value, onChange, onBlur }) => {
  return (
    <div className={styles.text_input_wrap}>
      <input
        className={styles.text_input}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default TextInput;
