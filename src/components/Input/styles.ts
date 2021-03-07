import styled, { css } from 'styled-components';

import Tooltip from '../Tolltip';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputProps>`
  border-radius: 10px 10px 0px 0px;
  padding: 1.5rem;
  width: 100%;

  border: 1px solid #dce2e6;

  color: #a0acb2;

  display: flex;
  justify-content: center;
  align-items: center;

  & + div {
    border-radius: 0px 0px 10px 10px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #de3838;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #f25d27;
      color: #f25d27;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #f25d27;
    `}

  input {
    background: transparent;
    border: 0;
    width: 100%;
    color: #617480;

    ::placeholder {
      color: #a0acb2;
    }
  }

  svg {
    margin-right: 20px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #de3838;
    color: #fff;

    &::before {
      border-color: #de3838 transparent;
    }
  }
`;
