import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import PostFeed from '../components/Dashboard/PostFeed';

/**
 * SocialMediaDashboardPage
 * 
 * This is the primary page for the Social Media Dashboard, representing the main
 * dashboard overview. It utilizes the MainAppLayout to establish the overall page 
 * structure including sidebars and header, and populates the main content area 
 * with the PostFeed component.
 *
 * The PostFeed component, along with other layout elements like SidebarLeftNav, 
 * TopHeader, and RightSidebarWidgets, are designed to be self-contained with 
 * their respective example data and functionalities based on the provided context code.
 * This page component primarily serves to assemble these larger pieces into the 
 * final dashboard view.
 */
const SocialMediaDashboardPage: React.FC = () => {
  return (
    <MainAppLayout title="Dashboard Overview">
      {/* 
        PostFeed is the central component for the main content area.
        It typically includes functionality for creating posts (PostComposer)
        and displaying a list of posts (UserPostCard).
        In this setup, PostFeed is assumed to manage its own data requirements.
      */}
      <PostFeed />
    </MainAppLayout>
  );
};

export default SocialMediaDashboardPage;
