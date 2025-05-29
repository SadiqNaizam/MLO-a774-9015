import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  MoreHorizontal,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe,
  Users,
  Bookmark,
  Edit3,
  Trash2,
  Flag
} from 'lucide-react';

export interface User {
  name: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  user: User;
  timestamp: string;
  privacy: 'public' | 'friends' | 'specific_friends' | 'only_me';
  content: string;
  imageUrl?: string;
  mapData?: {
    locationName: string;
    address: string;
    imageUrl: string;
    taggedFriendsCount?: number;
  };
  likes: number;
  comments: number;
  shares: number;
}

interface UserPostCardProps {
  post: Post;
  className?: string;
}

const PrivacyIcon: React.FC<{ privacy: Post['privacy'] }> = ({ privacy }) => {
  switch (privacy) {
    case 'public':
      return <Globe className="h-3.5 w-3.5 text-muted-foreground" />;
    case 'friends':
      return <Users className="h-3.5 w-3.5 text-muted-foreground" />;
    default:
      return <Globe className="h-3.5 w-3.5 text-muted-foreground" />;
  }
};

const UserPostCard: React.FC<UserPostCardProps> = ({ post, className }) => {
  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="flex flex-row items-center space-x-3 p-4">
        <Avatar>
          <AvatarImage src={post.user.avatarUrl} alt={post.user.name} />
          <AvatarFallback>{post.user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex-grow">
          <a href="#" className="font-semibold hover:underline">{post.user.name}</a>
          <div className="text-xs text-muted-foreground flex items-center space-x-1">
            <span>{post.timestamp}</span>
            <span>·</span>
            <PrivacyIcon privacy={post.privacy} />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem><Bookmark className="mr-2 h-4 w-4" /> Save post</DropdownMenuItem>
            <DropdownMenuItem><Edit3 className="mr-2 h-4 w-4" /> Edit post</DropdownMenuItem>
            <DropdownMenuItem><Flag className="mr-2 h-4 w-4" /> Report post</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">
              <Trash2 className="mr-2 h-4 w-4" /> Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="px-4 pb-2 pt-0">
        <p className="text-sm whitespace-pre-wrap break-words">{post.content}</p>
        {post.imageUrl && !post.mapData && (
          <div className="mt-3 rounded-lg overflow-hidden border">
            <AspectRatio ratio={16 / 9}>
              <img src={post.imageUrl} alt="Post image" className="object-cover w-full h-full" />
            </AspectRatio>
          </div>
        )}
        {post.mapData && (
          <div className="mt-3 rounded-lg overflow-hidden border">
            <AspectRatio ratio={16 / 9}>
              <img src={post.mapData.imageUrl} alt={post.mapData.locationName} className="object-cover w-full h-full" />
            </AspectRatio>
            <div className="p-3 bg-muted/50">
              <p className="font-semibold text-sm">{post.mapData.locationName}</p>
              <p className="text-xs text-muted-foreground">{post.mapData.address}</p>
              {post.mapData.taggedFriendsCount && (
                <p className="text-xs text-muted-foreground mt-1">
                  {post.mapData.taggedFriendsCount} {post.mapData.taggedFriendsCount > 1 ? 'others' : 'other'} have been here
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col px-4 pt-2 pb-3">
        <div className="flex justify-between items-center w-full text-xs text-muted-foreground mb-2">
          <span>{post.likes > 0 ? `${post.likes} Likes` : ''}</span>
          <div className="space-x-2">
            <span>{post.comments > 0 ? `${post.comments} Comments` : ''}</span>
            <span>{post.shares > 0 ? `${post.shares} Shares` : ''}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1 border-t pt-1 w-full">
          {[ 
            { label: 'Like', icon: ThumbsUp, count: post.likes },
            { label: 'Comment', icon: MessageSquare, count: post.comments },
            { label: 'Share', icon: Share2, count: post.shares },
          ].map(action => (
            <Button key={action.label} variant="ghost" className="text-muted-foreground font-medium hover:bg-muted w-full">
              <action.icon className="h-5 w-5 mr-1.5" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserPostCard;
