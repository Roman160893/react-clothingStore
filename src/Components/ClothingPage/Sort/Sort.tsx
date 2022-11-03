import React from 'react';
import pants from '../../../assets/img/pants.svg';
import jacket from '../../../assets/img/jacket.svg';
import jeans from '../../../assets/img/jeans.svg';
import shirt from '../../../assets/img/shirt.svg';
import tshirt from '../../../assets/img/t-shirt.svg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import classNames from 'classnames';
import { setType } from '../../../redux/slices/filterSlice';

type SortItem = {
  name: string;
  img: any;
};

const sort: SortItem[] = [
  { name: 'Брюки', img: pants },
  { name: 'Верхній одяг', img: jacket },
  { name: 'Джинси', img: jeans },
  { name: 'Сорочки', img: shirt },
  { name: 'Футболки', img: tshirt },
  { name: 'Взуття', img: 'https://img.icons8.com/ios/50/000000/drag-king.png' },
  { name: 'Аксесуари', img: 'https://img.icons8.com/ios/50/000000/person-female--v1.png' },
];

const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryName, type } = useSelector((state: RootState) => state.filter);

  const onClickSelectType = (index: number) => {
    dispatch(setType(index));
  };

  const onClickResetType = () => {
    dispatch(setType(null));
  };

  return (
    <div className="section__wrapper-collection">
      <div className="section__block" onClick={onClickResetType}>
        <span>{categoryName}</span>
      </div>
      <div className="section__block section__block-info ">
        {sort.map((el, index) => (
          <div
            className={classNames('section__collection', {
              'section__collection-active': type === index,
            })}
            key={index}
            onClick={() => onClickSelectType(index)}>
            <img alt="" src={el.img}></img>
            <p> {el.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sort;
