import { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Button from '../button/Button';
import './BurgerMenuStyle.scss';

type BurgerProps = {
  categoryName: string[];
  burgerOpen: boolean;
  onChangeCategory: (index: number) => void;
};

const BurgerMenu: FC<BurgerProps> = ({ categoryName, onChangeCategory, burgerOpen }) => (
  <div
    className={classNames('burger', {
      'burger-active': burgerOpen,
    })}>
    <ul>
      {categoryName.map((str, index) => (
        <li key={index}>
          <Link to="/clothing" onClick={() => onChangeCategory(index)}>
            {str}
          </Link>
        </li>
      ))}
    </ul>
    <Button>Увійти</Button>
  </div>
);

export default BurgerMenu;
