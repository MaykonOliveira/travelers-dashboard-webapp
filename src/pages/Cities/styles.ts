import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 7rem;

    width: 100%;
    height: 6rem;
    background: #fff;

    h1 {
      font-size: 2.25rem;
      line-height: 2.875rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 10px;

      padding: 0.6875rem 2rem;

      background: #51b853;
      color: #fff;

      font-weight: 600;
      line-height: 1.625rem;

      transition: background 0.5s;

      &:hover {
        background: ${shade(0.2, '#51b853')};
      }
    }
  }
`;
