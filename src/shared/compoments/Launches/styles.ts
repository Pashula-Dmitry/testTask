import styled from 'styled-components';

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 1.5rem;
  overflow: visible;
`;

export {GridContainer};
