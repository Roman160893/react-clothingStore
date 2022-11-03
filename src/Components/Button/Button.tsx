import classNames from 'classnames';
import React from 'react';
import './ButtonStyle.scss';

type ButtonProps = {
  children: any;
  primary?: boolean;
  outline?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, outline, primary, onClick }) => {
  return (
    <button
      className={classNames('button', {
        'button-outline': outline && outline,
        'button-primary': primary && primary,
      })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
