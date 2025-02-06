import React from 'react';
import { Input, InputProps } from '@nextui-org/react';

interface TextInputProps extends Omit<InputProps, 'type'> {
  name?: string;
  icon?: React.ReactNode; // Nueva prop para el icono
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
}

const InputText: React.FC<TextInputProps> = ({ name = 'email', onChange, className = '', icon, ...props }) => {
  return (
    <Input
      name={name}
      onChange={onChange}
      placeholder="email"
      labelPlacement="outside"
      startContent={
        icon ? (
          <div className="text-2xl text-default-400 pointer-events-none flex-shrink-0 ">
            {icon}
          </div>
        ) : null
      }
      className={`max-w-xs ${className}`} // Permite agregar más clases con TailwindCSS
      {...props}  // Pasamos el resto de las props
    />
  );
};

export default InputText;

