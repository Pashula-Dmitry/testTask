import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
`;

const Block = styled.div`
  display: flex;
  justify-content: center;
`;

interface TextProps {
  mode: 'overlay' | 'block';
}

const Text = styled.p<TextProps>`
  display: flex;
  ${(props) =>
    props.mode === 'overlay' &&
    `
      height: 100vh;
  `}
  align-items: center;
  justify-content: center;
`;

export {Overlay, Text, Block};
