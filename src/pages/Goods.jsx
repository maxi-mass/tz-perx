import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, loadCart, loadGoods } from "../store/actions/goodActions";
import GoodsList from "../components/GoodsList/GoodsList";

const Goods = () => {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.good.goods);
  useEffect(() => {
    dispatch(loadGoods());
    dispatch(loadCart());
  }, [dispatch]);

  const onAdd = good => {
    dispatch(addToCart(good));
  };

  return <GoodsList addToCartHandler={onAdd} goods={goods} />;
};

export default Goods;
