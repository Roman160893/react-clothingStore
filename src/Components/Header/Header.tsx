import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './HeaderStyle.scss';
import { setCategory, setName, setType } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import { windowScroll } from '../../assets/function';

const category: string[] = ['Всі товари', 'Для чоловіків', 'Для жінок'];

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const selectCategory = useSelector((state: RootState) => state.filter.category);
  const { totalCount } = useSelector((state: RootState) => state.cart);

  const onChangeCategory = (index: number): void => {
    dispatch(setCategory(index));
    dispatch(setType(null));
    windowScroll();
  };

  const onClickResetSet = () => {
    dispatch(setCategory(null));
    dispatch(setType(null));
  };

  React.useEffect(() => {
    dispatch(setName(selectCategory !== null && category[selectCategory]));
  }, [dispatch, selectCategory]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__wrapper-logo">
            <NavLink to="/" onClick={onClickResetSet}>
              Clothing
            </NavLink>
          </div>
          <nav className="header__wrapper-nav">
            <ul>
              {category.map((str, index) => (
                <li
                  key={index}
                  className={classNames({
                    'li-active': selectCategory === index,
                  })}>
                  <Link to="/clothing" onClick={() => onChangeCategory(index)}>
                    {str}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <NavLink to="/cart" onClick={windowScroll}>
            <div className="header__wrapper-basket">
              <i className="fa-solid fa-basket-shopping">
                {totalCount > 0 && <span>{totalCount}</span>}
              </i>
            </div>
          </NavLink>
          <button className="header__wrapper-login">Увійти</button>
          <div className="burger-bth">
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
