import React from 'react';
import { Helmet } from 'react-helmet';
import { FiArrowLeft } from 'react-icons/fi';

import { Content, WizardHeader, Stepper } from './styles';

interface AddCityProps {
  onAddCity(): void;
}

const AddCity: React.FC<AddCityProps> = ({ onAddCity }) => {
  return (
    <>
      <Helmet>
        <title>Travelers | Adicionar Cidades</title>
      </Helmet>
      <WizardHeader>
        <button type="button" onClick={() => onAddCity()}>
          <FiArrowLeft />
        </button>

        <strong>Adicionar um perfil</strong>

        <Stepper>
          <span>01</span>
          <span>02</span>
        </Stepper>
      </WizardHeader>
      <Content>aqui</Content>
    </>
  );
};

export default AddCity;
