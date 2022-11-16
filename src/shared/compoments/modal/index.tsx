import React, {FC} from 'react';

import {ReactComponent as Close} from '@assets/icons/close.svg';

import Portal from '@shared/compoments/portal';

import {ModalStyles, Overlay, Surface, Header, Content} from './styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: FC<Props> = (props) => {
  const {isOpen, onClose, title, children} = props;

  return (
    <Portal isOpen={isOpen}>
      <ModalStyles>
        <Surface>
          <Header>
            <p>{title}</p>
            <Close onClick={onClose} style={{cursor: 'pointer'}} />
          </Header>
          <Content>{children}</Content>
        </Surface>
        <Overlay onClick={onClose} />
      </ModalStyles>
    </Portal>
  );
};

export default React.memo(Modal);
