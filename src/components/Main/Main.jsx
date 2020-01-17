import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  loadCart,
  loadGoods
} from "../../store/actions/goodActions";
import { IMAGE_BASE_URL } from "../../api";

const Main = () => {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.good.goods);
  useEffect(() => {
    dispatch(loadCart());
    dispatch(loadGoods());
  }, []);

  const addToCartHandler = good => {
    dispatch(addToCart(good));
  };

  return (
    <div>
      <h2>Список товаров</h2>
      <ul className={styles.goods_list}>
        {goods.map(good => {
          return (
            <li key={good.name} className={styles.good_item}>
              <div>
                <img src={IMAGE_BASE_URL + good.image} alt="image" />
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
    </div>
  );
};

export default Main;
