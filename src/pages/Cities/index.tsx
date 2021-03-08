import React from 'react';
import { FiPlus } from 'react-icons/fi';
import SideBar from '../../components/SideBar';

import { Container, Content, Cities, City } from './styles';

const cities: React.FC = () => {
  const citiesData = [1, 2, 3, 4, 5];
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
        <Cities>
          {citiesData.map(() => (
            <City>
              <img
                src="https://hweb-upload.s3-sa-east-1.amazonaws.com/587fc4cec19a4713c4c007d7/af3c29b0b50a4a6aa134f44946ca0ffc.jpg"
                alt="Aguas mornas"
              />
              <div>
                <strong>Águas Mornas</strong>
                <span>13 locais</span>
              </div>
            </City>
          ))}
        </Cities>
      </Content>
    </Container>
  );
};

export default cities;
