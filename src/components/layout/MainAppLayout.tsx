import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';
import RightSidebarWidgets from '../Dashboard/RightSidebarWidgets';

interface MainAppLayoutProps {
  children: React.ReactNode;
  title?: string; // Optional: For setting the document.title
  className?: string; // Optional: For additional styling on the root div
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, title, className }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    // Optional: Set a default title if none is provided
    // else {
    //   document.title = "Social Media Dashboard";
    // }
  }, [title]);

  return (
    <div className={cn("min-h-screen bg-secondary", className)}>
      {/* 
        Left Sidebar: Fixed position, w-60 (15rem / 240px).
        Rendered via <Sidebar /> wrapper which in turn renders SidebarLeftNav.
        SidebarLeftNav defines its own fixed positioning and styling.
      */}
      <Sidebar />

      {/* 
        Top Header: Fixed position, h-16 (4rem / 64px).
        Spans the area between the left and right sidebars.
        Rendered via <Header /> wrapper which in turn renders TopHeader.
        TopHeader defines its own fixed positioning and styling.
      */}
      <Header />

      {/* 
        Right Sidebar: Fixed position, w-72 (18rem / 288px).
        RightSidebarWidgets component is used directly as per project structure.
        It defines its own fixed positioning and styling.
      */}
      <RightSidebarWidgets /> 
      
      {/* Main Content Area */}
      <main 
        className={cn(
          "ml-60",  // Leaves space for the w-60 left sidebar
          "mr-72",  // Leaves space for the w-72 right sidebar
          "pt-16",  // Leaves space for the h-16 header
          "min-h-screen", // Ensures the main area can fill the viewport height
          "flex flex-col" // Establishes a flex container to manage child element sizing
        )}
      >
        {/* Scrollable content wrapper with padding */}
        <div className="flex-grow p-6 overflow-y-auto min-w-0">
          {/*
            flex-grow: Allows this div to expand and fill available vertical space within the <main> tag.
            p-6: Applies 1.5rem (24px) padding. Layout Requirements specify 'px-6' for mainContent.
            overflow-y-auto: Enables vertical scrolling if content exceeds available height.
            min-w-0: Crucial for flex items; prevents wide content from breaking the layout.
           */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainAppLayout;
