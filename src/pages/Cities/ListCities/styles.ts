import { shade } from 'polished';
import styled from 'styled-components';

export const CitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 16.625rem);
  grid-gap: 2rem;
  padding: 3rem 0;

  align-items: center;
  justify-content: center;

  @media (max-width: 1550px) {
    grid-template-columns: repeat(4, 16.625rem);
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 16.625rem);
  }

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 16.625rem);
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 16.625rem);
  }
`;

export const City = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  border-radius: 16px;

  background: #fff;
  border: 1px solid #dce2e6;

  img {
    border-radius: 16px 16px 0 0;
  }
`;

export const CityDescription = styled.div`
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
`;

export const CityActions = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  margin: 1.25rem 1.25rem 0 0;

  display: flex;

  button {
    border: none;
    background: #fff;
    color: #617480;
    padding: 0.75rem;

    transition: background 0.5s;

    &:hover {
      background: ${shade(0.1, '#fff')};
    }

    svg {
      width: 1rem;
      height: 1rem;
    }

    &:first-child {
      margin-right: 0.25rem;
      border-radius: 0.625rem 0 0 0.625rem;
    }

    &:last-child {
      border-radius: 0 0.625rem 0.625rem 0;
    }
  }
`;
