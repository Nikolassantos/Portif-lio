import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const AppWrapper = styled.div`
  .active {
    border-bottom: 1px solid #333;
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0px 0px 3px rgba(44, 44, 44, 0.267);
  align-items: center;
  height: 90px;
  padding: 1% 10%;

  h1 {
    font-size: 22px;

    @media (max-width: 650px) {
      font-size: 18px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    transition: 0.25s 1s cubic-bezier(0.19, 1, 0.22, 1) ease-in-out;
    opacity: 0;
  }
  .link {
    list-style-type: none;
    padding: 10px;
    cursor: pointer;
  }
  .link:hover {
    border-bottom: solid 3px ${colors.primaryColor};
  }
  #list-icon {
    border-bottom: none;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
  }

  .hamburguer {
    display: block;
    background: #000;
    width: 30px;
    height: 2px;
    position: relative;
    transition: 0.5s ease-in-out;
  }
  .hamburguer:before,
  .hamburguer:after {
    background: #000;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }
  .hamburguer:before {
    top: -10px;
  }
  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }
  input:checked ~ ul {
    opacity: 1;
  }
  input:checked ~ label .menu {
    box-shadow: 0 0 0 800vw #4070f4, 0 0 0 8px #4070f4;
  }
  .menu {
    transition: box-shadow 1s ease-in-out;
    border-radius: 50%;
    background: #fff;
    width: 60px;
    height: 60px;
  }
  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }
  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }
  .hamburguer {
    top: 29px;
    left: 15px;
  }
`;
