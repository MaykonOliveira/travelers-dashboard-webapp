import { shade } from 'polished';
import styled from 'styled-components';
import Header from '../../../components/Header';

export const Content = styled.div``;

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

  span {
    border-radius: 50%;
    border: 1px solid #dce2e6;
    color: #617480;
    padding: 5px;

    align-items: center;
    justify-content: center;

    &:first-child {
      border: 3px solid #dce2e6;

      font-weight: 700;
    }

    & + span {
      margin-left: 10px;
    }
  }
`;
