import React from 'react';

type Props = {
  onClick: () => void;
  text: string;
};

const Button = ({ onClick, text }: Props) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
