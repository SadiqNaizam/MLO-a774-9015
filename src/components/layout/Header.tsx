import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  // TopHeader handles its own fixed positioning, height, and styling.
  // This component primarily serves as a standard import point for the layout.
  // The className prop is passed to TopHeader, which can use it for further customization if needed.
  return <TopHeader className={cn(className)} />;
};

export default Header;