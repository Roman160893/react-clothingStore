import classNames from 'classnames';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { windowScroll } from '../../../assets/function';
import { addProduct } from '../../../redux/slices/cartSlice';
import { ClothingItems } from '../../../redux/slices/clothingSlice';
import Button from '../../Button/Button';

const Item: React.FC<ClothingItems> = ({
  img,
  description,
  price,
  newprice,
  sale,
  news,
  discount,
  hit,
  id,
}) => {
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item = {
      id,
      img,
      description,
      price,
      newprice,
      count: 0,
    };
    dispatch(addProduct(item));
  };

  return (
    <div className="section__item">
      <div className="section__item-img">
        <img src={img} alt="" />
      </div>
      <div className="section__item-info">
        <p className="section__item-info-description">{description}</p>
        <div className="section__item-info-price">
          <p
            className={classNames('section__item-info-price', {
              'section__item-info-price-line': newprice,
            })}>
            {price} грн.
          </p>
          <p className="section__item-info-price">{newprice ? `${newprice} грн.` : null}</p>
        </div>
        <div className="section__item-btn">
          <Link to={`/clothing/${id}`} onClick={windowScroll}>
            <Button outline>Детальна інформація</Button>
          </Link>
          <Button primary onClick={onClickAdd}>
            Додати у кошик
          </Button>
        </div>
      </div>
      <div className="section__item-shares">
        <p className={classNames({ 'section__item-shares-sale': sale })}>{sale}</p>
        <p className={classNames({ 'section__item-shares-news': news })}>{news}</p>
        <p className={classNames({ 'section__item-shares-discount': discount })}>{discount}</p>
        <p className={classNames({ 'section__item-shares-hit': hit })}>{hit}</p>
      </div>
    </div>
  );
};

export default Item;
