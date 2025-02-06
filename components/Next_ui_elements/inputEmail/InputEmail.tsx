import React from 'react';
import { Input, InputProps } from '@nextui-org/react';
import { Email } from '@/icons/Icons';



interface EmailInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
  
}

const InputEmail: React.FC<EmailInputProps> = ({ name = 'email', onChange, className = '', ...props }) => {
  return (
    <Input      
      name={name}    
      onChange={onChange}  
      placeholder="email"
      labelPlacement="outside"     
      startContent={
        <Email className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      className={`max-w-xs ${className}`} // Permite agregar más clases con TailwindCSS
      {...props}  // Pasamos el resto de las props
    />
  );
};

export default InputEmail;
