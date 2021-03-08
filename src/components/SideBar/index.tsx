import React from 'react';
import { FiGrid, FiMapPin, FiMessageSquare, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

const SideBar: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <img src={logo} alt="Travelers" />

      <div>
        <FiMapPin />
        <FiGrid />
        <FiMessageSquare />
      </div>

      <FiPower onClick={() => signOut()} />
    </Container>
  );
};

export default SideBar;
