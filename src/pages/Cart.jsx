import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  removeAllFromCart,
  loadCart,
  setQtyGoods
} from "../store/actions/goodActions";
import CartList from "../components/CartList/CartList";

const Cart = () => {
  const sumTotal = useSelector(state => state.good.sumTotal);
  const cart = useSelector(state => state.good.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  const onRemove = good => {
    dispatch(removeFromCart(good));
  };

  const onAllRemove = () => {
    dispatch(removeAllFromCart());
  };

  const onQtyChange = (e, good) => {
    const qty = parseInt(e.target.value);

    if (Number.isInteger(qty) && qty > 0) {
      dispatch(setQtyGoods({ qty: parseInt(qty), name: good.name }));
    }
    if (e.target.value === "") {
      dispatch(setQtyGoods({ qty: "", name: good.name }));
    }
  };

  const onBlur = good => {
    if (good.qty === "") {
      dispatch(setQtyGoods({ qty: 0, name: good.name }));
    }
  };

  return (
    <CartList
      cart={cart}
      sumTotal={sumTotal}
      qtyChangeHandler={onQtyChange}
      onBlurHandler={onBlur}
      removeHandler={onRemove}
      removeAllFromCartHandler={onAllRemove}
    />
  );
};

export default Cart;
