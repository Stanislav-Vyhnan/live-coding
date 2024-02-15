import { ChangeEvent } from 'react';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className: string;
  placeholder: string;
};

const Input = ({ value, onChange, className, placeholder }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    onChange(currentValue);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      className={`${className} text-sm text-grey-600`}
      placeholder={placeholder}
    />
  );
};

export default Input;
