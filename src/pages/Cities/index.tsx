import React, { useState } from 'react';
import Helmet from 'react-helmet';

import { FiEdit3, FiPlus, FiTrash } from 'react-icons/fi';
import SideBar from '../../components/SideBar';
import AddCity from './AddCity';

import {
  Container,
  Content,
  CitiesGrid,
  City,
  CityDescription,
  CityActions,
} from './styles';

const Cities: React.FC = () => {
  const citiesData = [1, 2, 3, 4, 5];
  const [showAddCity, setShowAddCity] = useState(false);

  function handleAddCity(): void {
    setShowAddCity(!showAddCity);
  }

  return (
    <Container>
      <Helmet>
        <title>Travelers | Cidades</title>
      </Helmet>
      <SideBar />

      {showAddCity ? (
        <AddCity onAddCity={() => handleAddCity()} />
      ) : (
        <Content>
          <header>
            <h1>Cidades</h1>
            <button type="button" onClick={() => handleAddCity()}>
              <FiPlus />
              Adicionar um perfil
            </button>
          </header>
          <CitiesGrid>
            {citiesData.map(() => (
              <City>
                <img
                  src="https://hweb-upload.s3-sa-east-1.amazonaws.com/587fc4cec19a4713c4c007d7/af3c29b0b50a4a6aa134f44946ca0ffc.jpg"
                  alt="Aguas mornas"
                />
                <CityDescription>
                  <strong>Águas Mornas</strong>
                  <span>13 locais</span>
                </CityDescription>

                <CityActions>
                  <button type="button">
                    <FiEdit3 />
                  </button>
                  <button type="button">
                    <FiTrash />
                  </button>
                </CityActions>
              </City>
            ))}
          </CitiesGrid>
        </Content>
      )}
    </Container>
  );
};

export default Cities;
