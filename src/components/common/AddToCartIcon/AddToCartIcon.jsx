import React from "react";
import styles from "./AddToCartIcon.module.css";

const AddToCartIcon = ({ onPress }) => {
  return <div onClick={onPress} className={styles.cart_icon}></div>;
};

export default AddToCartIcon;
