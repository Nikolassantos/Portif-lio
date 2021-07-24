import styled from 'styled-components';

export const CardBoxWrapper = styled.div`
  height: auto;
  flex-grow: 1;
  background-color: #fafafa;
  padding: 40px 40px 80px 40px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px #cacaca;
  position: relative;
  text-align: start;
`;
export const Title = styled.h3``;

export const Describe = styled.div`
  margin-top: 20px;
`;

export const Footer = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  .background-button-container {
    margin: 5px;
  }
`;
