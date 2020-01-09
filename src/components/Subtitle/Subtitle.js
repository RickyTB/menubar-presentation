import styled from 'styled-components';

const Subtitle = styled.small`
  font-size: 40px;
  margin-bottom: 0.5rem;
  text-align: ${props => props.align || 'center'};
  color: ${props => props.color || '#6c757d'};
`;

export default Subtitle;