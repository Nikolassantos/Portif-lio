import React from 'react';
import { SecondCardBoxWrapper } from './styles';
import ReactStars from 'react-stars';
import { ISecondCardBox } from './types';
import { colors } from '../../styles/theme';

export const KnowledgeCard: React.FC<ISecondCardBox> = ({
  children,
  tech,
  experience,
  value,
}) => {
  return (
    <SecondCardBoxWrapper>
      {children}
      <h3>{tech}</h3>
      <p>{experience}</p>
      <ReactStars
        count={5}
        color2={colors.primaryColor}
        value={value}
        size={35}
        edit={false}
      />
    </SecondCardBoxWrapper>
  );
};
