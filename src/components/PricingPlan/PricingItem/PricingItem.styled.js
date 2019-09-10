import styled from 'styled-components';
import getColor from '../../../helpers/get-pricing-color';

export const IconStyled = styled.i`
  content: url(${props => props.icon});
`;

export const ButtonStyled = styled.button`
  background-color: ${props => getColor(props.label)};
`;

export const TitleStyled = styled.h3`
  color: ${props => getColor(props.label)};
`;
