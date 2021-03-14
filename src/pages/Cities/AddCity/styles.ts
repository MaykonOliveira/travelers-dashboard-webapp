import { shade } from 'polished';
import styled, { css } from 'styled-components';
import Header from '../../../components/Header';

interface StepProps {
  current?: boolean;
}

interface FormInputImagePreviewProps {
  src: string;
}

export const WizardHeader = styled(Header)`
  button {
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #dce2e6;
    padding: 0;

    background: #fff;
    color: #a0acb2;

    transition: background 0.5s;

    &:hover {
      background: ${shade(0.1, '#fff')};
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  strong {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.875rem;
    color: #a0acb2;
  }
`;

export const Stepper = styled.div`
  display: flex;
`;

export const Step = styled.span<StepProps>`
  border-radius: 50%;
  border: 1px solid #dce2e6;
  color: #617480;
  padding: 0.5rem;

  align-items: center;
  justify-content: center;
  text-align: center;

  ${props =>
    props.current &&
    css`
      font-weight: 700;
      background: #51b853;
      color: #fff;
    `}

  & + span {
    margin-left: 0.625rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 50rem;
  height: auto;
  margin: 3.125rem 0 3.125rem 0;
  border-radius: 15px;
  border: 1px solid #dce2e6;

  background: #fff;
`;

export const StepFormHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 2.5rem 4rem;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 1px solid #dce2e6;

  background: linear-gradient(90deg, #f5fff5 0%, rgba(220, 245, 221, 0) 62.99%);

  span {
    background: #51b853;
    color: #fff;
    border-radius: 10px;
    padding: 1.3125rem;
    margin-right: 2.5rem;

    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  h1 {
    color: #51b853;
    font-size: 2.25rem;
    line-height: 2.125rem;
  }
`;

export const StepFormSection = styled.div`
  display: flex;
  margin-top: 4rem;
  padding: 0 4rem;

  flex-direction: column;
`;

export const StepFormSectionTitle = styled.div`
  padding: 1rem 0;

  border-bottom: 1px solid #dce2e6;

  strong {
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
`;

export const StepFormSectionContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;
`;

export const StepFormSectionField = styled.div`
  display: flex;
  flex-direction: column;

  & + div {
    margin-top: 1.5rem;
  }

  span {
    margin-bottom: 0.625rem;
    font-family: Heebo;
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`;

export const FormInput = styled.input`
  height: 3.5rem;
  padding: 1.5rem;

  border: 1px solid #dce2e6;

  background: #f5f8fa;
  border-radius: 10px;

  line-height: 1.625rem;

  color: #123952;
`;

export const FormInputImage = styled.input`
  height: 10rem;
  padding: 4.25rem 10rem;

  border: 2px dashed #dce2e6;

  background: #f5f8fa;
  border-radius: 10px;

  line-height: 1.625rem;

  color: #123952;
`;

export const FormInputImagePreview = styled.div<FormInputImagePreviewProps>`
  height: 10rem;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;

  border-radius: 10px;
`;

export const FormInputTextArea = styled.textarea`
  resize: none;

  height: 12.5rem;
  padding: 1.5rem;

  border: 1px solid #dce2e6;

  background: #f5f8fa;
  border-radius: 10px;

  line-height: 1.625rem;

  color: #123952;
`;

export const StepFormFooter = styled.div`
  display: flex;

  padding: 0 4rem;
  margin: 3.125rem 0;

  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 1.625rem;
      width: 1.625rem;

      color: #f25d27;

      margin-right: 1.625rem;
    }

    p {
      font-size: 0.875rem;
      line-height: 1.375rem;
      width: 8rem;
    }
  }

  button {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 10px;

    background: #115d8c;
    color: #fff;

    line-height: 1.625rem;
    font-weight: 500;

    transition: background 0.5s;

    &:hover {
      background: ${shade(0.2, '#115d8c')};
    }
  }
`;
