import styled from 'styled-components';

const HeaderStyle = styled.header`
  height: 80px;
  background-color: var(--primary-color);
  color: var(--white-color);
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  padding: 0 40px;
  z-index: 1;
`;

const Title = styled.h1`
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 700;
`;

const Logo = styled.img`
  font-style: italic;
  font-weight: 700;
  object-fit: cover;
  height: 100%;
`;

export {HeaderStyle, Title, Logo};
