import React, { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: PropsWithChildren<Props>) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
