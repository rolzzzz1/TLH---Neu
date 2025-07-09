import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'h-8 w-auto' }) => {
  return (
    <img
      src="/logo.png"
      alt="The Listening Home"
      className={className}
    />
  );
}; 