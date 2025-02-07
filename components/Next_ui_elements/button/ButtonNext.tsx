import React from 'react';
import { Button } from '@heroui/button';

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
  className="bg-gradient-to-tr from-[#f27121] via-[#e94057] to-[#8a2387] text-white shadow-lg w-full text-lg",
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
