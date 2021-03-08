import { shade } from 'polished';
import styled, { css } from 'styled-components';

interface SiderBarProps {
  activePath?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-between;

  height: 100vh;
  width: 6rem;

  background: #f25d27;
  color: #fff;

  svg {
    cursor: pointer;

    transition: color 0.5s;

    width: 1.375rem;
    height: 1.375rem;

    &:hover {
      color: ${shade(0.3, '#fff')};
    }

    &:last-child {
      margin-bottom: 1.5rem;
    }
  }

  img {
    width: 3rem;
    height: 3rem;
    margin-top: 1.5rem;
  }
`;

export const NavigationIcons = styled.div<SiderBarProps>`
  display: flex;
  flex-direction: column;

  svg {
    width: 1.375rem;
    height: 1.375rem;

    &:first-child {
      ${props =>
        props.activePath !== '/cities' &&
        css`
          color: #ffa585;
          &:hover {
            color: ${shade(0.3, '#ffa585')};
          }
        `}
    }

    & + svg {
      margin-top: 2.5rem;

      ${props =>
        props.activePath !== '/categories' &&
        css`
          color: #ffa585;
          &:hover {
            color: ${shade(0.3, '#ffa585')};
          }
        `}
    }

    &:last-child {
      ${props =>
        props.activePath !== '/messages' &&
        css`
          color: #ffa585;
          &:hover {
            color: ${shade(0.3, '#ffa585')};
          }
        `}
    }
  }
`;
