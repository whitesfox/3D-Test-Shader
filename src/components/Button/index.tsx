import React, { ReactNode } from 'react';
import classNames from 'classnames';
//import classNames from 'classnames';
import Styles from './style.module.scss';

type Props = {
  type?: 'submit' | 'button' | undefined;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export default function Button({
  type = 'button',
  className = '',
  children,
  disabled = false,
  active = false,
  onClick = () => {},
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(
        className,
        Styles.buttonStyle,
        { [Styles.activeAddition]: active === true },
        { [Styles.unActiveAddition]: active === false }
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
