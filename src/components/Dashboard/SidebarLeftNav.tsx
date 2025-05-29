import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Newspaper,
  MessageCircle,
  PlaySquare,
  Store,
  Gamepad2,
  CalendarDays,
  Flag,
  Users,
  ListChecks,
  HeartHandshake,
  ChevronDown,
  Megaphone,
  FilePlus2,
  UserPlus,
  CalendarPlus,
  HandHeart,
  MoreHorizontal,
  UserCircle
} from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  optionsIcon?: React.ElementType;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon: Icon, label, isActive, optionsIcon: OptionsIcon, className }) => (
  <a
    href={href}
    className={cn(
      'flex items-center space-x-3 px-3 py-2.5 rounded-md hover:bg-muted transition-colors',
      isActive && 'bg-secondary font-semibold text-primary relative',
      className
    )}
  >
    {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"></div>}
    <Icon className={cn('h-5 w-5', isActive ? 'text-primary' : 'text-foreground/70')} />
    <span className="text-sm truncate flex-grow">{label}</span>
    {OptionsIcon && (
      <Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
        <OptionsIcon className="h-4 w-4 text-foreground/70" />
      </Button>
    )}
  </a>
);

interface SidebarLeftNavProps {
  className?: string;
}

const SidebarLeftNav: React.FC<SidebarLeftNavProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://i.pravatar.cc/40?u=olennamason',
  };

  const mainNavItems = [
    { id: 'newsFeed', label: 'News Feed', icon: Newspaper, href: '#', isActive: true, optionsIcon: MoreHorizontal },
    { id: 'messenger', label: 'Messenger', icon: MessageCircle, href: '#' },
    { id: 'watch', label: 'Watch', icon: PlaySquare, href: '#' },
    { id: 'marketplace', label: 'Marketplace', icon: Store, href: '#' },
  ];

  const shortcuts = [
    { id: 'farmville2', label: 'FarmVille 2', icon: Gamepad2, href: '#' },
    // Add more shortcuts here
  ];

  const exploreItems = [
    { id: 'events', label: 'Events', icon: CalendarDays, href: '#' },
    { id: 'pages', label: 'Pages', icon: Flag, href: '#' },
    { id: 'groups', label: 'Groups', icon: Users, href: '#' },
    { id: 'friendLists', label: 'Friend Lists', icon: ListChecks, href: '#' },
    { id: 'fundraisers', label: 'Fundraisers', icon: HeartHandshake, href: '#' },
  ];

  const createItems = [
    { id: 'ad', label: 'Ad', icon: Megaphone, href: '#' },
    { id: 'page', label: 'Page', icon: FilePlus2, href: '#' },
    { id: 'group', label: 'Group', icon: UserPlus, href: '#' },
    { id: 'event', label: 'Event', icon: CalendarPlus, href: '#' },
    { id: 'fundraiser', label: 'Fundraiser', icon: HandHeart, href: '#' },
  ];

  return (
    <aside className={cn('fixed top-0 left-0 h-screen w-60 bg-card text-card-foreground border-r flex flex-col z-10', className)}>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          <NavItem href="#profile" icon={UserCircle} label={user.name} className="font-medium" />
          
          <nav className="space-y-1">
            {mainNavItems.map((item) => (
              <NavItem key={item.id} {...item} />
            ))}
          </nav>

          <Separator className="my-4" />

          <div>
            <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Shortcuts</h3>
            <nav className="space-y-1">
              {shortcuts.map((item) => (
                <NavItem key={item.id} {...item} />
              ))}
            </nav>
          </div>

          <Separator className="my-4" />

          <div>
            <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Explore</h3>
            <nav className="space-y-1">
              {exploreItems.map((item) => (
                <NavItem key={item.id} {...item} />
              ))}
              <Button variant="ghost" className="w-full justify-start space-x-3 px-3 py-2.5 text-sm text-foreground/70">
                <ChevronDown className="h-5 w-5" />
                <span>See More...</span>
              </Button>
            </nav>
          </div>

          <Separator className="my-4" />

          <div>
            <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Create</h3>
            <nav className="space-y-1">
              {createItems.map((item) => (
                <NavItem key={item.id} {...item} />
              ))}
            </nav>
          </div>
        </div>
      </ScrollArea>
      <div className="p-4 border-t text-xs text-muted-foreground">
        Privacy · Terms · Advertising · Ad Choices · Cookies · More · Meta © {new Date().getFullYear()}
      </div>
    </aside>
  );
};

export default SidebarLeftNav;
