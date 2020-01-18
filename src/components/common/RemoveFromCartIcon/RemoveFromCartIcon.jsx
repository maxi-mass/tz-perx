import React from "react";
import styles from "./RemoveFromCartIcon.module.css";

const RemoveFromCartIcon = ({ onPress }) => {
  return <div onClick={onPress} className={styles.cart_icon}></div>;
};

export default RemoveFromCartIcon;
