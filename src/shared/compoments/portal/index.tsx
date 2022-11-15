import ReactDOM from 'react-dom';
import {FC, ReactNode} from 'react';

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const Portal: FC<Props> = ({isOpen, children}: Props) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="portal">{children}</div>,
    document.body,
  );
};

export default Portal;
