import {FC} from 'react';

import {Text} from './styles';

type Props = {
  text: string;
};

const EmptyList: FC<Props> = (props) => {
  const {text} = props;

  return <Text>{text}</Text>;
};

export default EmptyList;
