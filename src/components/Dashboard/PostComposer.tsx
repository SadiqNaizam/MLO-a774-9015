import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Image as ImageIcon, Video, Users as TagUsersIcon, Smile, MapPin } from 'lucide-react'; // Renamed Image to ImageIcon to avoid conflict

interface PostComposerProps {
  className?: string;
  currentUser: {
    name: string;
    avatarUrl: string;
  };
}

const PostComposer: React.FC<PostComposerProps> = ({ className, currentUser }) => {
  const [postText, setPostText] = useState('');

  const handlePost = () => {
    if (postText.trim()) {
      console.log('Posting:', postText);
      setPostText(''); // Clear input after posting
    }
  };

  const composerActions = [
    { id: 'photoVideo', label: 'Photo/Video', icon: ImageIcon, color: 'text-green-500' },
    { id: 'tagFriends', label: 'Tag Friends', icon: TagUsersIcon, color: 'text-blue-500' },
    { id: 'feelingActivity', label: 'Feeling/Activity', icon: Smile, color: 'text-yellow-500' },
    { id: 'checkIn', label: 'Check In', icon: MapPin, color: 'text-red-500' },
    { id: 'liveVideo', label: 'Live Video', icon: Video, color: 'text-red-600' },
  ];

  return (
    <Card className={cn('w-full shadow-sm', className)}>
      <CardHeader className="p-3 border-b">
        <p className="text-sm font-semibold">Create Post</p>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="mt-1">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <Textarea
            placeholder={`What's on your mind, ${currentUser.name.split(' ')[0]}?`}
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            className="min-h-[60px] border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none text-base p-0 shadow-none"
          />
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-2 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
        <div className="flex flex-wrap gap-1">
          {composerActions.map(action => (
            <Button key={action.id} variant="ghost" size="sm" className="text-muted-foreground hover:bg-muted">
              <action.icon className={cn('h-5 w-5 mr-1.5', action.color)} />
              {action.label}
            </Button>
          ))}
        </div>
        <Button onClick={handlePost} disabled={!postText.trim()} className="w-full sm:w-auto">
          Post
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostComposer;
