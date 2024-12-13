import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive }) => {
  return (
    <Link
      to={href}
      className={cn(
        'text-gray-600 hover:text-primary transition-colors relative py-2',
        isActive && 'text-primary font-medium'
      )}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
      )}
    </Link>
  );
};