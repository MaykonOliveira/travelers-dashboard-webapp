import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle, FiLock, FiUnlock } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: 'email' | 'password';
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, type, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { defaultValue, fieldName, error, registerField } = useField(name);

  const handleOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  function handleShowPassword(): void {
    setShowPassword(!showPassword);
  }

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      {Icon && type === 'password' && showPassword === false && (
        <FiLock size={20} onClick={handleShowPassword} />
      )}

      {Icon && type === 'password' && showPassword === true && (
        <FiUnlock size={20} onClick={handleShowPassword} />
      )}

      {Icon && type !== 'password' && <Icon size={20} />}

      <input
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        type={showPassword ? 'text' : type}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#C53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
