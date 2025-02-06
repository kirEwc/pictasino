import React, { useState } from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { Password, WeuiEyesOffOutlined, WeuiEyesOnOutlined } from '@/icons/Icons';


type PasswordInputProps = Omit<InputProps, 'type'> & {
    name?: string;   
};

const InputPassword: React.FC<PasswordInputProps> = ({
    name = 'password',
    className = '',   
    ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      placeholder="contrseña"
      name={name}
      type={isVisible ? 'text' : 'password'}
      className={`max-w-xs ${className}`}  
      autoComplete="current-password" 
      startContent={
      <Password className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
          
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
          aria-label="toggle password visibility"
          
        >
          {isVisible ? (
            <WeuiEyesOffOutlined className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <WeuiEyesOnOutlined className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
     
      {...props}
      
    />
  );
};

export default InputPassword;
