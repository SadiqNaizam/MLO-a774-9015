import React from 'react';
import { cn } from '@/lib/utils';
import SidebarLeftNav from '../Dashboard/SidebarLeftNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  // SidebarLeftNav handles its own fixed positioning, width, and styling.
  // This component primarily serves as a standard import point for the layout.
  // The className prop is passed to SidebarLeftNav, which can use it for further customization if needed.
  return <SidebarLeftNav className={cn(className)} />;
};

export default Sidebar;