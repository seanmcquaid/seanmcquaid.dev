import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/NavigationMenu';

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
          <NavigationMenuItem key={route.to}>
            <NavigationMenuLink to={route.to}>{route.label}</NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
