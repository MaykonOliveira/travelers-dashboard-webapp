import React from 'react';
import { Helmet } from 'react-helmet';
import { FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

interface AddCityProps {
  onAddCity(): void;
}

const AddCity: React.FC<AddCityProps> = ({ onAddCity }) => {
  return (
    <Container>
      <Helmet>
        <title>Travelers | Adicionar Cidades</title>
      </Helmet>
      <Content>
        <header>
          <button type="button" onClick={() => onAddCity()}>
            <FiArrowLeft size={32} />
          </button>
        </header>
      </Content>
    </Container>
  );
};

export default AddCity;
