import React from "react";
import styles from "./GoodsList.module.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { IMAGE_BASE_URL } from "../../api";

const GoodsList = ({ goods, addToCartHandler }) => {
  return (
    <div>
      <h2>Список товаров</h2>
      <ul className={styles.goods_list}>
        {goods.map(good => {
          return (
            <li key={good.name} className={styles.good_item}>
              <div>
                <img src={IMAGE_BASE_URL + good.image} alt="good" />
              </div>
              <div>{good.name}</div>
              <div>{good.price} $</div>
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

export default GoodsList;
