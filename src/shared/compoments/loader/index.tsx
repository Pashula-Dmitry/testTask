import {FC} from 'react';
import {Overlay, Text, Block} from './styles';

type Props = {
  message: string;
  mode: 'overlay' | 'block';
};

const Loader: FC<Props> = (props) => {
  const {message, mode} = props;
  const Load = mode === 'overlay' ? Overlay : Block;

  return (
    <Load>
      <Text mode={mode}>{message}</Text>
    </Load>
  );
};

export default Loader;
