/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FiAlertCircle, FiArrowLeft, FiPlus } from 'react-icons/fi';

import {
  Content,
  WizardHeader,
  Stepper,
  Step,
  StepForm,
  StepFormHeader,
  StepFormSection,
  StepFormSectionTitle,
  StepFormSectionContent,
  StepFormSectionField,
  FormInput,
  FormInputImage,
  FormInputImagePreview,
  FormInputTextArea,
  StepFormFooter,
} from './styles';

interface AddCityProps {
  onAddCity(): void;
}

const AddCity: React.FC<AddCityProps> = ({ onAddCity }) => {
  const [cityImage, setCityImage] = useState('');

  function handleCityImageUpload(event: any): void {
    setCityImage(URL.createObjectURL(event.target.files[0]));
  }

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
          <Step current>01</Step>
          <Step>02</Step>
        </Stepper>
      </WizardHeader>
      <Content>
        <StepForm>
          <StepFormHeader>
            <span>01</span>
            <h1>Adicione uma cidade</h1>
          </StepFormHeader>

          <StepFormSection>
            <StepFormSectionTitle>
              <strong>Dados da cidade</strong>
            </StepFormSectionTitle>

            <StepFormSectionContent>
              <StepFormSectionField>
                <span>Nome da cidade</span>
                <FormInput />
              </StepFormSectionField>

              <StepFormSectionField>
                <span>Foto da cidade</span>

                {cityImage ? (
                  <FormInputImagePreview src={cityImage} />
                ) : (
                  <FormInputImage>
                    <input
                      type="file"
                      name="img"
                      accept="image/*"
                      onChange={e => handleCityImageUpload(e)}
                    />
                    <FiPlus />
                    Adicionar uma foto
                  </FormInputImage>
                )}
              </StepFormSectionField>

              <StepFormSectionField>
                <span>Descrição da cidade</span>
                <FormInputTextArea />
              </StepFormSectionField>
            </StepFormSectionContent>
          </StepFormSection>

          <StepFormFooter>
            <div>
              <FiAlertCircle />
              <p>Preencha todos os dados com cuidado</p>
            </div>
            <button type="button">Próximo</button>
          </StepFormFooter>
        </StepForm>
      </Content>
    </>
  );
};

export default AddCity;
