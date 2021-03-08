import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 7rem;

    width: 100%;
    height: 6rem;
    background: #fff;

    border-bottom: 1px solid #dce2e6;

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

export const Cities = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 16.625rem);
  grid-gap: 2rem;
  padding: 3rem 0;

  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const City = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 16px;

  background: #fff;
  border: 1px solid #dce2e6;

  img {
    border-radius: 16px 16px 0 0;
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;

    strong {
      font-size: 1.25rem;
      line-height: 1.875rem;
    }

    span {
      line-height: 1.75rem;
    }
  }
`;
