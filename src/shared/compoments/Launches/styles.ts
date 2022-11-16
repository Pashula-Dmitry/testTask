import styled from 'styled-components';

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  grid-gap: 1.5rem;
  overflow: visible;
`;

const LoaderWrapper = styled.ul`
  margin: 25px 0;
`;

export {GridContainer, LoaderWrapper};
