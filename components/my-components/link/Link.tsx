// components/CustomLink.tsx
import React from 'react';
import Link from 'next/link';
import { LinkUi } from '@/icons/Icons';

interface CustomLinkProps {
  href: string;
  text: string; 
  className?: string;  
  anchorIcon?: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({
  href,
  text,
  className, 
  anchorIcon = <LinkUi />,
}) => {
  return (
    <Link href={href} className={`flex items-center ${className}`}>
      <span>{text}</span>
      <span className="ml-1">{anchorIcon}</span> 
    </Link>
  );
};

export default CustomLink;
