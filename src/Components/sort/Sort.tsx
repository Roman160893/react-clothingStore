import { FC, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import pants from '../../assets/img/pants.svg';
import jacket from '../../assets/img/jacket.svg';
import jeans from '../../assets/img/jeans.svg';
import shirt from '../../assets/img/shirt.svg';
import tshirt from '../../assets/img/t-shirt.svg';
import { RootState } from '../../redux/store';
import { setType } from '../../redux/slices/filterSlice';

import './SortStyle.scss';

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
  { name: 'Взуття', img: 'https://img.icons8.com/windows/32/null/trainers.png' },
  { name: 'Аксесуари', img: 'https://img.icons8.com/windows/32/null/red-purse.png' },
];

const Sort: FC = () => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { categoryName, type, category } = useSelector((state: RootState) => state.filter);
  const sortRef = useRef(null);

  const onClickSelectType = (index: number) => {
    dispatch(setType(index));
    setOpenPopup(false);
  };

  const onClickResetType = () => {
    dispatch(setType(null));
  };

  const onClickPopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleOutsideClick = (e: any) => {
    if (!e.path.includes(sortRef.current)) {
      setOpenPopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="sort">
      <div className="sort__category" onClick={onClickResetType}>
        <span>{category !== null && categoryName[category]}</span>
      </div>
      <div className="sort__content" ref={sortRef}>
        {sort.map((el, index) => (
          <div
            className={classNames('sort__type', {
              'sort__type-active': type === index,
            })}
            key={index}
            onClick={() => onClickSelectType(index)}>
            <img alt="" src={el.img}></img>
            <p> {el.name} </p>
          </div>
        ))}
        <div className="sort__label" onClick={onClickPopup}>
          <b>Сортувати по </b>
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </div>
        {openPopup && (
          <div className="sort__popup">
            <ul className="">
              {sort.map((obj, index) => (
                <li
                  onClick={() => onClickSelectType(index)}
                  className={classNames({
                    'sort__type-active': type === index,
                  })}
                  key={index}>
                  {obj.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sort;
