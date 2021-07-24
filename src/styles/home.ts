import styled from 'styled-components';
import { colors } from './theme';

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 650px;

  .apresentation {
    font-size: 18px;
    font-weight: 400;
    color: ${colors.Brown};
  }
  .name {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    font-family: 'Space Mono', monospace;
  }

  @media (max-width: 1060px) {
    text-align: center;
  }
`;
export const ApresentationContainer = styled.div`
  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
  }
`;
export const PlayerContainer = styled.div`
  @media (max-width: 1060px) {
    display: none;
  }
`;
export const AboutWrapper = styled.div`
  background-color: ${colors.lightGrey};
  padding: 1%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;

  p {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  h1 {
    padding-bottom: 40px;
  }
`;

export const ProjectsWrapper = styled.div`
  text-align: center;
  padding: 70px;

  h1 {
    padding-bottom: 40px;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const BoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FooterTitle = styled.h4`
  font-size: 18px;
  color: ${colors.primaryColor};
  padding-top: 30px;
`;
export const FooterWrapper = styled.div`
  background: #0e2431;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 70px;
  text-align: center;

  h4 {
    color: #fff;
  }

  ul {
    display: flex;
    padding: 10px;
  }
  li {
    padding: 10px;
  }
`;
