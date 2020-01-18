import React from "react";
import styles from "./GoodsList.module.css";
import { IMAGE_BASE_URL } from "../../api";
import LinearProgress from "@material-ui/core/LinearProgress";
import AddToCartIcon from "../common/AddToCartIcon/AddToCartIcon";

const GoodsList = ({ goods, addToCartHandler }) => {
  return (
    <div>
      <h2>Список товаров</h2>
      {goods.length === 0 && <LinearProgress />}
      <ul className={styles.goods_list}>
        {goods.map(good => {
          return (
            <li key={good.name} className={styles.good_item}>
              <div>
                <img src={IMAGE_BASE_URL + good.image} alt="good" />
              </div>
              <div>{good.name}</div>
              <div>{good.price} $</div>
              <AddToCartIcon onPress={() => addToCartHandler(good)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GoodsList;
