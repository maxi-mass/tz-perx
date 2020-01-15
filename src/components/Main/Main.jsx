import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart, loadCart } from "../../store/actions/goodActions";
const goods = [
  {
    name: "Python",
    price: 5.35,
    image:
      "https://imagefinder.co/storage/w1000/images/2019/01/picjumbo_ipad-tablet-and-macbook-laptop-workspace-from-above_free_stock_photos_picjumbo_hnck2126-2210x1474.jpg"
  },
  {
    name: "Go",
    price: 7.55,
    image:
      "https://imagefinder.co/storage/w1000/images/2019/01/goodfreephotos_working-on-laptop-and-mobile-devices.jpg"
  },
  {
    name: "Node.js",
    price: 9.99,
    image:
      "https://imagefinder.co/storage/w1000/images/2019/11/gratisography_5dd56ce89fb9ae79bf7e5792_gratisography-landscape-laptop-900x600.jpg"
  }
];

const Main = () => {
  const dispatch = useDispatch();

  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("cart") || []);
  //   setCart(saved);
  //   dispatch(loadCart(saved));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const addToCartHandler = good => {
    setCart(prev => [good, ...prev]);
    dispatch(addToCart(good));
  };

  return (
    <ul className={styles.goods_list}>
      {goods.map(good => {
        return (
          <li key={good.name} className={styles.good_item}>
            <div>
              <img src={good.image} alt="image" />
            </div>
            <div>{good.name}</div>
            <div>{good.price}</div>
            <div className={styles.goods_list__add_to_cart}>
              <AddShoppingCartIcon onClick={() => addToCartHandler(good)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Main;
