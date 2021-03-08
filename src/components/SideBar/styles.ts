import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  height: 100vh;
  max-width: 6rem;

  background: #f25d27;
  color: #fff;

  svg {
    cursor: pointer;

    transition: color 0.5s;

    &:hover {
      color: ${shade(0.3, '#fff')};
    }
  }

  img {
    width: 3rem;
    height: 3rem;
    margin-top: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;

    svg {
      width: 1.375rem;
      height: 1.375rem;

      & + svg {
        margin-top: 2.5rem;
      }
    }
  }

  svg:last-child {
    width: 1.375rem;
    height: 1.375rem;

    margin-bottom: 1.5rem;
  }
`;
