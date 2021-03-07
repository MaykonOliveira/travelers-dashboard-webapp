import { shade } from 'polished';
import styled, { keyframes } from 'styled-components';
import backgroundImg from '../../assets/login.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const animationAppearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;

  animation: ${animationAppearFromLeft} 1s;

  form {
    width: 26rem;

    h1 {
      margin-bottom: 2.75rem;
    }
  }
`;

export const ForgotRemember = styled.div`
  display: flex;
  width: 100%;
  margin: 2rem 0;

  color: #a0acb2;

  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      appearance: none;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #dce2e6;
      border-radius: 0.5rem;
      text-align: center;
      cursor: pointer;

      &:checked {
        background: #51b853;

        &::after {
          content: '✔';
          color: white;
        }
      }
    }

    span {
      margin-left: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #a0acb2;

    &:hover {
      color: ${shade(0.2, '#a0acb2')};
    }
  }
`;

export const AccessAlertMessage = styled.div`
  width: 26rem;

  display: flex;
  align-items: center;
  justify-content: left;

  margin-top: 5rem;

  svg {
    width: 2.625rem;
    height: 2.625rem;

    color: #f25d27;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    color: #617480;

    width: 8.75rem;
    margin-left: 1.625rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
