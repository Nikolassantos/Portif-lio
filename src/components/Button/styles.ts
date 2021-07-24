import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: #4070f4;
  color: #fff;
  padding: 15px;
  width: auto;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: none;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Space Mono', monospace;
  cursor: pointer;

  .icon {
    margin-right: 10px;
  }

  &:hover {
    background-color: #3460da;
  }
`;
