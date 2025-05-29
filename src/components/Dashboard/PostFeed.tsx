import React from 'react';
import { cn } from '@/lib/utils';
import UserPostCard, { Post } from './UserPostCard'; // Assuming UserPostCard defines and exports Post type
import PostComposer from './PostComposer';

interface PostFeedProps {
  className?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ className }) => {
  const currentUser = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/48?u=olennamason_composer',
  };

  const postsData: Post[] = [
    {
      id: '1',
      user: {
        name: 'Julia Fillory',
        avatarUrl: 'https://i.pravatar.cc/48?u=juliafillory',
      },
      timestamp: '2 hrs ago',
      privacy: 'public' as const,
      content: 'Checking out some new stores downtown! This place is amazing. Highly recommend the new bakery on Main Street.',
      mapData: {
        locationName: 'Raleigh, North Carolina',
        address: 'City - United States',
        imageUrl: 'https://images.unsplash.com/photo-1594488501207-89f83aba7a32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFsZWlnaCUyMG5vcnRoJTIwY2Fyb2xpbmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        taggedFriendsCount: 2,
      },
      likes: 156,
      comments: 23,
      shares: 12,
    },
    {
      id: '2',
      user: {
        name: 'Alex Chen',
        avatarUrl: 'https://i.pravatar.cc/48?u=alexchen',
      },
      timestamp: '5 hrs ago',
      privacy: 'friends' as const,
      content: 'Just finished a great book! "The Midnight Library" by Matt Haig. Has anyone else read it? Thoughts?',
      imageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      likes: 89,
      comments: 42,
      shares: 5,
    },
    {
      id: '3',
      user: {
        name: 'Samantha Bee',
        avatarUrl: 'https://i.pravatar.cc/48?u=samanthabee',
      },
      timestamp: '1 day ago',
      privacy: 'public' as const,
      content: 'Feeling inspired after a hike this morning! Nature is the best therapy. ☀️⛰️ #hiking #nature #weekendvibes',
      likes: 230,
      comments: 55,
      shares: 18,
    },
  ];

  return (
    <div className={cn('w-full max-w-xl mx-auto space-y-6', className)}>
      <PostComposer currentUser={currentUser} />
      {postsData.map((post) => (
        <UserPostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostFeed;
