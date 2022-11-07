import { FC } from 'react';
import classNames from 'classnames';
import './ButtonStyle.scss';

type ButtonProps = {
  children: any;
  primary?: boolean;
  outline?: boolean;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ children, outline, primary, onClick }) => (
  <button
    className={classNames('button', {
      'button-outline': outline && outline,
      'button-primary': primary && primary,
    })}
    onClick={onClick}>
    {children}
  </button>
);

export default Button;
