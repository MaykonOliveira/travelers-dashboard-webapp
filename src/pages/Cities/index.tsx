import React from 'react';
import { FiPlus } from 'react-icons/fi';
import SideBar from '../../components/SideBar';

import { Container, Content } from './styles';

const cities: React.FC = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <header>
          <h1>Cidades</h1>
          <button type="button">
            <FiPlus />
            Adicionar um perfil
          </button>
        </header>
        <section />
      </Content>
    </Container>
  );
};

export default cities;
