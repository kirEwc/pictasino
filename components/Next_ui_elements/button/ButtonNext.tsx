import React from 'react';
import { Button } from '@nextui-org/react';

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
   radius?:   "none" | "sm" | "md" | "lg"| "full"
   icon?: React.ReactNode
};

const ButtonNext: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  type = 'button', 
  disabled = false, 
  className = 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg w-full',
  icon,
  radius = 'full'
}) => {
  return (
    
        <Button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      radius={radius}     
    >
      {icon && <span className="ml-2">{icon}</span>}
      {text}
    </Button>
   
    
  );
};

export default ButtonNext;
