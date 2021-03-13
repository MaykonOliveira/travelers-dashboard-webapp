import React from 'react';
import { FiEdit3, FiPlus, FiTrash } from 'react-icons/fi';
import Header from '../../../components/Header';

import { CitiesGrid, CityActions, CityDescription, City } from './styles';

interface ListCitesProps {
  handleAddCity(): void;
}

const ListCities: React.FC<ListCitesProps> = ({ handleAddCity }) => {
  const citiesData = [1, 2, 3, 4, 5];

  return (
    <>
      <Header>
        <h1>Cidades</h1>
        <button type="button" onClick={() => handleAddCity()}>
          <FiPlus />
          Adicionar um perfil
        </button>
      </Header>
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
    </>
  );
};

export default ListCities;
