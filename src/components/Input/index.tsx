import { useRef, useState } from 'react';

type Props = {
  onFinish: (value: string) => void;
};

const debouncedTime = 150;

const Input = ({ onFinish }: Props) => {
  const [value, setValue] = useState('');

  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    const currentTimeoutId = timeoutIdRef.current;

    setValue(currentValue);

    if (currentTimeoutId) {
      window.clearTimeout(currentTimeoutId);
    }

    const timeoutId = setTimeout(() => {
      onFinish(currentValue);
    }, debouncedTime);

    timeoutIdRef.current = timeoutId;
  };

  return (
    <input
      className="border-2 border-sky-500 p-2"
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
