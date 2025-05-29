import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { PlusCircle, Archive, Settings, MessageCircle, Search, MoreHorizontal, Video, UserPlus, CheckCircle, Circle } from 'lucide-react';

interface RightSidebarWidgetsProps {
  className?: string;
}

interface SuggestedGroup {
  id: string;
  name: string;
  coverImageUrl: string;
  members: number;
  memberAvatars: string[];
}

interface ChatUser {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  lastMessage?: string;
  unreadCount?: number;
}

const RightSidebarWidgets: React.FC<RightSidebarWidgetsProps> = ({ className }) => {
  const suggestedGroups: SuggestedGroup[] = [
    {
      id: '1',
      name: 'Mad Men (MADdicts)',
      coverImageUrl: 'https://images.unsplash.com/photo-1604905543909-9775517144fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkJTIwbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
      members: 6195,
      memberAvatars: ['https://i.pravatar.cc/24?u=sg1m1', 'https://i.pravatar.cc/24?u=sg1m2', 'https://i.pravatar.cc/24?u=sg1m3']
    },
    {
      id: '2',
      name: 'Dexter Morgan Fans', // Simplified from Dexter Morgan for typical group name
      coverImageUrl: 'https://images.unsplash.com/photo-1578852612293-43597f562897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV4dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=300&q=60',
      members: 6984,
      memberAvatars: ['https://i.pravatar.cc/24?u=sg2m1', 'https://i.pravatar.cc/24?u=sg2m2', 'https://i.pravatar.cc/24?u=sg2m3']
    },
  ];

  const chatUsers: ChatUser[] = [
    { id: '1', name: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/32?u=jane', isOnline: true, lastMessage: 'See you then!', unreadCount: 2 },
    { id: '2', name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/32?u=john', isOnline: true, lastMessage: 'Haha, true.' },
    { id: '3', name: 'Alice Brown', avatarUrl: 'https://i.pravatar.cc/32?u=alice', isOnline: false, lastMessage: 'Okay, sounds good.' },
    { id: '4', name: 'Bob Green', avatarUrl: 'https://i.pravatar.cc/32?u=bob', isOnline: true },
  ];

  return (
    <aside className={cn('fixed top-0 right-0 h-screen w-72 bg-secondary text-secondary-foreground flex flex-col z-10', className)}>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          {/* Stories Widget */} 
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-foreground">Stories</h3>
              <div className="space-x-2">
                <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-primary/10">
                  <Archive className="h-3.5 w-3.5 mr-1" /> Archive
                </Button>
                <Button variant="ghost" size="sm" className="text-xs text-primary hover:bg-primary/10">
                  <Settings className="h-3.5 w-3.5 mr-1" /> Settings
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full justify-start space-x-3 h-16 border-border hover:bg-muted">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <PlusCircle className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">Add to Your Story</p>
                <p className="text-xs text-muted-foreground">Share a photo, video or write something</p>
              </div>
            </Button>
          </section>

          <Separator />

          {/* Suggested Groups Widget */} 
          <section>
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-foreground">Suggested Groups</h3>
              <Button variant="link" size="sm" className="text-xs text-primary px-0">See All</Button>
            </div>
            <div className="space-y-3">
              {suggestedGroups.map(group => (
                <Card key={group.id} className="overflow-hidden bg-card shadow-sm">
                  <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${group.coverImageUrl})` }} />
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-[-8px] mb-2">
                      {group.memberAvatars.map((avatar, index) => (
                        <Avatar key={index} className="h-6 w-6 border-2 border-card">
                          <AvatarImage src={avatar} />
                          <AvatarFallback>{group.name[0]}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <h4 className="font-semibold text-sm text-card-foreground truncate hover:underline cursor-pointer">{group.name}</h4>
                    <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
                    <Button variant="outline" size="sm" className="w-full mt-2 border-border hover:bg-muted">
                      <UserPlus className="h-4 w-4 mr-1.5" /> Join
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Chat Placeholder - More detailed chat panel would be its own component */}
        </div>
      </ScrollArea>
      <div className="p-3 border-t border-border/50">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-md text-foreground">Chat</h3>
          <div className="flex space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted"><Video className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted"><Search className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:bg-muted"><MoreHorizontal className="h-4 w-4" /></Button>
          </div>
        </div>
        <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
            {chatUsers.map(user => (
              <Button key={user.id} variant="ghost" className="w-full justify-start h-12 px-2 py-1.5 hover:bg-muted">
                <div className="relative mr-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0,1)}</AvatarFallback>
                  </Avatar>
                  {user.isOnline && 
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-secondary rounded-full" />
                  }
                </div>
                <div className="flex-grow text-left overflow-hidden">
                  <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                  {user.lastMessage && <p className={cn("text-xs truncate", user.unreadCount ? "text-foreground font-medium" : "text-muted-foreground")}>{user.lastMessage}</p>}
                </div>
                {user.unreadCount && 
                  <Badge variant="default" className="ml-auto h-5 min-w-[1.25rem] p-1 text-xs bg-primary text-primary-foreground">
                    {user.unreadCount}
                  </Badge>
                }
                {!user.unreadCount && !user.lastMessage && user.isOnline &&
                   <CheckCircle className="h-4 w-4 text-green-500 ml-auto" />
                }
                {!user.unreadCount && !user.lastMessage && !user.isOnline &&
                   <Circle className="h-3 w-3 text-muted-foreground ml-auto" />
                }
              </Button>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebarWidgets;
