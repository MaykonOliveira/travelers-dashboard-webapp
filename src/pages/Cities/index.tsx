import React, { useState } from 'react';
import Helmet from 'react-helmet';

import SideBar from '../../components/SideBar';
import AddCity from './AddCity';
import ListCities from './ListCities';

import { Container, Content } from './styles';

const Cities: React.FC = () => {
  const [showAddCity, setShowAddCity] = useState(true);

  function handleAddCity(): void {
    setShowAddCity(!showAddCity);
  }

  return (
    <Container>
      <Helmet>
        <title>Travelers | Cidades</title>
      </Helmet>
      <SideBar />

      <Content>
        {showAddCity ? (
          <AddCity onAddCity={() => handleAddCity()} />
        ) : (
          <ListCities handleAddCity={() => handleAddCity()} />
        )}
      </Content>
    </Container>
  );
};

export default Cities;
