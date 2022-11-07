import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';

import { fetchClothing } from '../../redux/slices/clothingSlice';
import Sort from '../../Components/sort/Sort';
import Loader from '../../Components/loader/Loader';
import Item from '../../Components/item/Item';
import './ClothingPageStyle.scss';

const Clothing: React.FC = () => {
  const dispatch = useAppDispatch();
  const { category, type } = useSelector((state: RootState) => state.filter);
  const { items, status } = useSelector((state: RootState) => state.clothing);

  useEffect(() => {
    dispatch(fetchClothing(category));
  }, [category, dispatch]);

  return (
    <section className="section">
      <div className="container">
        <Sort />
        <div className="section__card-collection">
          {status === 'error' ? (
            <div className="section__err-info">
              <h2> Вибачте! Сталася помилка. 😕</h2>
              <p> Не вдалося завантажити дані. Спробуйте будь ласка ще раз! </p>
            </div>
          ) : (
            <>
              {status === 'loading'
                ? [...new Array(8)].map((_, index) => <Loader key={index} />)
                : items
                    ?.filter((obj) => (type === null ? obj : obj.type === type))
                    .map((obj) => <Item key={obj.id} {...obj}></Item>)}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Clothing;
