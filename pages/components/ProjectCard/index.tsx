import React from 'react';
import Button from '../Button';
import { CardBoxWrapper, Describe, Footer, Title } from './styles';
import { ICardBox } from './types';
import { FiLayout } from 'react-icons/fi';

function ProjectCard({ title, desc }: ICardBox) {
  return (
    <CardBoxWrapper>
      <Title>{title || 'Em breve'}</Title>
      <Describe>{desc || 'Projeto em construção.'}</Describe>
      <Footer>
        <div className="background-button-container">
          <Button
            link="https://iuricode.github.io/one-page-company/"
            label="WEBSITE"
          >
            <FiLayout className="icon" />
          </Button>
        </div>
      </Footer>
    </CardBoxWrapper>
  );
}

export default ProjectCard;
