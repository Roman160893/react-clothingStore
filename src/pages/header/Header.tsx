import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { setCategory, setType } from '../../redux/slices/filterSlice';
import { RootState } from '../../redux/store';
import { windowScroll } from '../../assets/function';
import BurgerMenu from '../../Components/burgerMenu/BurgerMenu';
import './HeaderStyle.scss';

const Header: React.FC = () => {
  const [burgerOpen, setBurgerOpen] = React.useState<boolean>(false);
  const [windowWidth, setWindowWidth] = React.useState<number>();

  const dispatch = useDispatch();
  const { category, categoryName } = useSelector((state: RootState) => state.filter);
  const { totalCount } = useSelector((state: RootState) => state.cart);

  const onChangeCategory = (index: number): void => {
    dispatch(setCategory(index));
    dispatch(setType(null));
    windowScroll();
    setBurgerOpen(false);
  };

  const onClickResetSet = () => {
    dispatch(setCategory(null));
    dispatch(setType(null));
    setBurgerOpen(false);
  };

  const onClickCartPage = () => {
    setBurgerOpen(false);
    windowScroll();
  };

  const resizeHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__wrapper-logo">
            <NavLink to="/react-clothingStore" onClick={onClickResetSet}>
              Clothing
            </NavLink>
          </div>
          <nav className="header__wrapper-nav">
            <ul>
              {categoryName &&
                categoryName.map((str: string, index: number) => (
                  <li
                    key={index}
                    className={classNames({
                      'li-active': category === index,
                    })}>
                    <Link to="/clothing" onClick={() => onChangeCategory(index)}>
                      {str}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="header__wrapper-btn">
            <NavLink to="/cart" onClick={onClickCartPage}>
              <div className="header__wrapper-basket">
                <i className="fa-solid fa-basket-shopping">
                  {totalCount > 0 && <span>{totalCount}</span>}
                </i>
              </div>
            </NavLink>
            <button className="header__wrapper-login">Увійти</button>
            <div
              className={classNames('burger-bth', {
                'burger-bth active-btn': burgerOpen,
              })}
              onClick={() => setBurgerOpen(!burgerOpen)}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {windowWidth && windowWidth < 950 && (
        <BurgerMenu
          categoryName={categoryName}
          onChangeCategory={onChangeCategory}
          burgerOpen={burgerOpen}
        />
      )}
    </header>
  );
};

export default Header;
