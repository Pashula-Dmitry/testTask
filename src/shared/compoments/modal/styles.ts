import styled from 'styled-components';

const ModalStyles = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: flex;
  justify-content: center;
  padding: 35px 0;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: var(--overlay-color);
  z-index: -1;
  transition: 150ms ease-in-out;
`;

const Content = styled.div`
  padding-top: 24px;
  flex-grow: 1;
`;

const Header = styled.header`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.2px;
  justify-content: space-between;
`;

const Surface = styled.div`
  width: 75vw;
  max-height: 100vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  overflow: auto;
  background: #ffffff;
`;

export {Overlay, ModalStyles, Surface, Header, Content};
