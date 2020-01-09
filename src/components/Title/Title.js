import styled from 'styled-components';

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 0;
  text-align: ${props => props.align || 'center'};
  color: ${props => props.color || 'black'};
`;

export default Title;