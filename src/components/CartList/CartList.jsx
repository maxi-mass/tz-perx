import React from "react";
import styles from "./CartList.module.css";
import { IMAGE_BASE_URL } from "../../api";
import RemoveFromCartIcon from "../common/RemoveFromCartIcon/RemoveFromCartIcon";
import TextInput from "../common/TextInput/TextInput";
import Button from "../common/Button/Button";

const CartList = ({
  cart,
  sumTotal,
  qtyChangeHandler,
  onBlurHandler,
  removeHandler,
  removeAllFromCartHandler
}) => {
  return (
    <div>
      <h2>Корзина</h2>
      <ul className={styles.cart_list}>
        {cart.map(good => {
          return (
            <li key={good.name} className={styles.cart_item}>
              <div>
                <img src={IMAGE_BASE_URL + good.image} alt="good" />
              </div>
              <div>{good.name}</div>
              <div>{good.price} $</div>
              <TextInput
                value={good.qty}
                onChange={e => qtyChangeHandler(e, good)}
                onBlur={() => onBlurHandler(good)}
              />
              <RemoveFromCartIcon onPress={() => removeHandler(good)} />
            </li>
          );
        })}
        {cart.length > 0 && (
          <>
            <li className={styles.cart_sum}>
              <div>
                Итого: <span>{Number(sumTotal.toFixed(2))} $</span>
              </div>
            </li>
            <li>
              <Button
                onPress={removeAllFromCartHandler}
                color={"#b71c1c"}
                text={"Очистить корзину"}
              />
            </li>
          </>
        )}
        {cart.length === 0 && <strong>Корзина пуста</strong>}
      </ul>
    </div>
  );
};

export default CartList;
