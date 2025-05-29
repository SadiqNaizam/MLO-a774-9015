import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
  Facebook,
  Search,
  Home,
  UserSearch,
  Users,
  MessageCircle,
  Bell,
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut
} from 'lucide-react';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const currentUser = {
    name: 'Olenna',
    avatarUrl: 'https://i.pravatar.cc/32?u=olennamason',
  };

  const notifications = {
    friendRequests: 2,
    messages: 5,
    alerts: 8,
  };

  return (
    <header className={cn('fixed top-0 left-60 right-72 h-16 bg-card text-card-foreground border-b flex items-center justify-between px-4 shadow-sm z-20', className)}>
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-primary" />
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search" className="pl-8 pr-2 py-2 h-9 w-52 rounded-full bg-secondary border-none focus:bg-card" />
        </div>
      </div>

      {/* Center Section: Navigation (simplified from image as user info is in sidebar/dropdown) */} 
      <nav className="flex items-center space-x-2">
        <Button variant="ghost" className="h-12 w-24 hover:bg-muted data-[active=true]:bg-secondary data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:text-primary rounded-none" data-active={true}>
          <Home className="h-6 w-6" />
        </Button>
        <Button variant="ghost" className="h-12 w-24 hover:bg-muted data-[active=true]:bg-secondary data-[active=true]:border-b-2 data-[active=true]:border-primary data-[active=true]:text-primary rounded-none">
          <UserSearch className="h-6 w-6" /> {/* Find Friends */} 
        </Button>
        {/* Other main navigation tabs can go here if needed */}
      </nav>

      {/* Right Section: Profile, Notifications, Actions */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" className="rounded-full h-8 px-3 text-sm flex items-center space-x-1.5 hover:bg-muted">
          <Avatar className="h-6 w-6">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span>{currentUser.name}</span>
        </Button>

        <div className="flex items-center space-x-1">
          {(['friendRequests', 'messages', 'alerts'] as const).map((type) => {
            const iconMap = { friendRequests: Users, messages: MessageCircle, alerts: Bell };
            const Icon = iconMap[type];
            const count = notifications[type];
            return (
              <Button key={type} variant="ghost" size="icon" className="rounded-full relative bg-muted hover:bg-muted/80 w-10 h-10">
                <Icon className="h-5 w-5 text-foreground" />
                {count > 0 && (
                  <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 min-w-[1.25rem] flex items-center justify-center p-0.5 text-xs">
                    {count > 99 ? '99+' : count}
                  </Badge>
                )}
              </Button>
            );
          })}
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full bg-muted hover:bg-muted/80 w-10 h-10">
              <ChevronDown className="h-5 w-5 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuItem>
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground">See your profile</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" /> Settings & Privacy</DropdownMenuItem>
            <DropdownMenuItem><HelpCircle className="mr-2 h-4 w-4" /> Help & Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4" /> Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
