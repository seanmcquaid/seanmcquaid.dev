import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/NavigationMenu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';

interface Route {
  to: string;
  label: string;
}

const routes: Route[] = [
  { to: '/about', label: 'About' },
  {
    to: '/blog',
    label: 'Blog',
  },
  { to: '/talks', label: 'Talks' },
];

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink to="/">{'Sean McQuaid'}</NavigationMenuLink>
        </NavigationMenuItem>
        {routes.map(route => (
          <NavigationMenuItem key={route.to} className="sm:hidden">
            <NavigationMenuLink to={route.to}>{route.label}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>Open</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
