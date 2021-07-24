import React from 'react';
import { ButtonWrapper } from './styles';
import { IButton } from './types';

function Button({ label, link, children }: IButton) {
  return (
    <ButtonWrapper>
      {children}
      <a href={link} target="_blank" rel="noreferrer">
        {label}
      </a>
    </ButtonWrapper>
  );
}
export default Button;
