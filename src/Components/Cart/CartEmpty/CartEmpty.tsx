import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../../../assets/img/empty-cart.png';

const CartEmpty: React.FC = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Ваш кошик попрожній <span>😕</span>
      </h2>
      <p>
        Скоріше за все Ви ще не добавили товару.
        <br />
        Для того, щоб замовити товар перейдіть на головну сторінку.
      </p>
      <img src={emptyCart} alt="Empty cart" />
      <Link to="/clothing" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
