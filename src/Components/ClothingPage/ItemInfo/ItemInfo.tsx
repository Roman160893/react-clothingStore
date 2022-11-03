import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { RootState } from '../../../redux/store';
import Button from '../../Button/Button';
import './ItemInfo.scss';
import { getImg } from '../../../assets/function';
import { addProduct, CartItem } from '../../../redux/slices/cartSlice';

const ItemInfo: React.FC = () => {
  const [toggleState, setToggleState] = useState<number>(1);

  const id = Number(useParams().id);
  const { items } = useSelector((state: RootState) => state.clothing);
  const dispatch = useDispatch();

  function toggleTab(index: number) {
    setToggleState(index);
  }

  const item = items.filter((obj) => obj.id === id);

  const addProductCart = () => {
    const addItem: CartItem = {
      id: item[0].id,
      description: item[0].description,
      img: item[0].img,
      price: item[0].price,
      count: 0,
    };
    dispatch(addProduct(addItem));
  };

  return (
    <section className="item-info">
      <div className="container">
        <div className="item-info__container">
          <div className="item-info__back">
            <Link to="/clothing">
              <Button primary> Назад </Button>
            </Link>
          </div>
          <div className="item-info__content">
            {item.map((obj) => (
              <div className="item-info__card" key={obj.id}>
                <div className="item-info__card-img">
                  <Slider
                    className="slider-male"
                    dots
                    initialSlide={0}
                    infinite
                    customPaging={(i) => {
                      return (
                        <div>
                          <img className="slider-male__mini" alt="" src={getImg(item)[i]} />
                        </div>
                      );
                    }}
                    dotsClass="slick-dots custom-indicator">
                    {getImg(item).map((ite, index) => (
                      <div key={index} className="slider-male__container">
                        <img src={ite} alt="" className="slider-male__img" />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="item-info__card-content">
                  <div className="item-info__card-content-title">{obj.description}</div>
                  <div className="item-info__card-content-price">
                    <span>Ціна: </span>
                    {obj.newprice ? `${obj.newprice} грн.` : `${obj.price} грн.`}
                  </div>
                  <div className="item-info__card-content-description">
                    <span>Опис: </span>
                    {obj.detailedDescription}
                  </div>
                  <div className="item-info__card-content-btn">
                    <Button onClick={addProductCart} outline>
                      Добавити в кошик
                    </Button>
                  </div>
                  <div className="card__tabs">
                    <div className="card__tabs-nav">
                      <button
                        onClick={() => toggleTab(1)}
                        className={
                          toggleState === 1
                            ? 'card__tabs-disc card__tabs-disc-action'
                            : 'card__tabs-disc'
                        }>
                        Доставка
                      </button>
                      <button
                        onClick={() => toggleTab(2)}
                        className={
                          toggleState === 2
                            ? 'card__tabs-disc card__tabs-disc-action'
                            : 'card__tabs-disc'
                        }>
                        Оплата
                      </button>
                      <button
                        onClick={() => toggleTab(3)}
                        className={
                          toggleState === 3
                            ? 'card__tabs-disc card__tabs-disc-action'
                            : 'card__tabs-disc'
                        }>
                        Гарантія
                      </button>
                    </div>
                    <div className="card__tabs-item">
                      <div
                        className={
                          toggleState === 1
                            ? 'card__tabs-content card__tabs-content-active'
                            : 'card__tabs-content'
                        }>
                        Самовивіз з нашого магазину — безкоштовно. <br />
                        «Нововю поштою» по Україні — 35 грн.
                        <br />
                        Кур'єром по Києву — 35 грн.
                      </div>
                      <div
                        className={
                          toggleState === 2
                            ? 'card__tabs-content card__tabs-content-active'
                            : 'card__tabs-content'
                        }>
                        Оплата кур'єру або післяплата.
                      </div>
                      <div
                        className={
                          toggleState === 3
                            ? 'card__tabs-content card__tabs-content-active'
                            : 'card__tabs-content'
                        }>
                        Гарантія від виробника від 1 до 3 років.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemInfo;
