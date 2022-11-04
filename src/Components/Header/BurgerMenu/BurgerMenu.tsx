import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';

import './BurgerMenuStyle.scss';

type BurgerProps = {
  categoryName: string[];
  burgerOpen: boolean;
  onChangeCategory: (index: number) => void;
};

const BurgerMenu: React.FC<BurgerProps> = ({ categoryName, onChangeCategory, burgerOpen }) => {
  return (
    <div
      className={classNames('burger', {
        'burger-active': burgerOpen,
      })}>
      <ul>
        {categoryName.map((str, index) => (
          <li key={str}>
            <Link to="/clothing" onClick={() => onChangeCategory(index)}>
              {str}
            </Link>
          </li>
        ))}
      </ul>
      <Button>Увійти</Button>
    </div>
  );
};

export default BurgerMenu;
