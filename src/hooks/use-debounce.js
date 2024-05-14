import {useState, useEffect} from 'react';

const useDebounce = (searchRequest, delay) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setValue(searchRequest), delay);
    return () => clearTimeout(handler);
  }, [delay, searchRequest]);

  return value;
};

export default useDebounce;
