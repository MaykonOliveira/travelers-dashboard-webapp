import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  children?: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  return <Container className={className}>{children}</Container>;
};

export default Header;
