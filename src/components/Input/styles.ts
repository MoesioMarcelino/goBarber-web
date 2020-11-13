import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9900;
      border-color: #ff9900;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9900;
    `}

  input {
    color: #f4ede8;
    flex: 1;
    background: transparent !important;
    border: 0;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
