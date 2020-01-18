import React from "react";
import styles from "./CartList.module.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import TextField from "@material-ui/core/TextField";
import { IMAGE_BASE_URL } from "../../api";

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
              <TextField
                id="outlined-basic"
                value={good.qty}
                variant="outlined"
                onChange={e => qtyChangeHandler(e, good)}
                onBlur={() => onBlurHandler(good)}
                className={styles.cart_item_qty}
              />
              <div style={{ cursor: "pointer" }}>
                <HighlightOffIcon onClick={() => removeHandler(good)} />
              </div>
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
                variant="outlined"
                color="secondary"
                startIcon={<DeleteIcon />}
                onClick={removeAllFromCartHandler}
              >
                Очистить корзину
              </Button>
            </li>
          </>
        )}
        {cart.length === 0 && <strong>Корзина пуста</strong>}
      </ul>
    </div>
  );
};

export default CartList;
