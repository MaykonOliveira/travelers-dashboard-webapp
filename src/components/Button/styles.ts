import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  background: #f25d27;
  height: 4.5rem;
  width: 100%;
  border-radius: 10px;
  border: 0;
  padding: 0 1.5rem;
  color: #fff;
  font-weight: 500;
  font-size: 1.125rem;
  margin-top: 2rem;
  transition: background-color 0.2s;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${shade(0.1, '#F25D27')};
  }
`;

export const Loader = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #312e38;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: spin 1.2s linear infinite;
`;
