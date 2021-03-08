import React from 'react';
import { FiGrid, FiMapPin, FiMessageSquare, FiPower } from 'react-icons/fi';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container, NavigationIcons } from './styles';

import logo from '../../assets/logo.svg';

const SideBar: React.FC = () => {
  const { signOut } = useAuth();
  const location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="Travelers" />

      <NavigationIcons activePath={location.pathname}>
        <FiMapPin onClick={() => history.push('/cities')} />
        <FiGrid onClick={() => history.push('/categories')} />
        <FiMessageSquare />
      </NavigationIcons>

      <FiPower onClick={() => signOut()} />
    </Container>
  );
};

export default SideBar;
