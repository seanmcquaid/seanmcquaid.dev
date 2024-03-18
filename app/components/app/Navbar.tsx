import { MenuIcon } from 'lucide-react';
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
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

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
    <NavigationMenu className="w-full max-w-full *:w-full p-4">
      <NavigationMenuList className="flex w-full justify-between items-center">
        <NavigationMenuItem>
          <NavigationMenuLink to="/">{'Sean McQuaid'}</NavigationMenuLink>
        </NavigationMenuItem>
        <li>
          <ul className="flex">
            {routes.map(route => (
              <NavigationMenuItem key={route.to} className="sm:hidden ml-8">
                <NavigationMenuLink to={route.to}>
                  {route.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </ul>
        </li>
        <NavigationMenuItem className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <MenuIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {routes.map(route => (
                <DropdownMenuItem key={route.to}>
                  <NavigationMenuLink to={route.to}>
                    {route.label}
                  </NavigationMenuLink>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
