import React from 'react';
import { Input, InputProps } from '@nextui-org/react';

interface NumberInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  icon?: React.ReactNode; 
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputNumberNext: React.FC<NumberInputProps> = ({ 
  name = 'number', 
  onChange, 
  icon, 
  ...props 
}) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const validKeys = [
      'Backspace',
      'Delete',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'Enter',
    ];
    
    if (
      !validKeys.includes(e.key) && 
      (e.key < '0' || e.key > '9')
    ) {
      e.preventDefault();
    }
  };

  return (
    <Input      
      name={name}          
      onChange={onChange}  
      onKeyDown={handleKeyDown} 
      placeholder=" X   X   X   X   X" 
      labelPlacement="outside"     
      type="tel" // Cambia el tipo a "tel" para teclado numérico en móviles
      startContent={icon} 
      className={`max-w-xs`}       
      {...props}
    />
  );
};

export default InputNumberNext;
