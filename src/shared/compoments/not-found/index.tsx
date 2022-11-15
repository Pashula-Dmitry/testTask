import {FC} from 'react';

type Props = {
  text: string;
};

const NotFound: FC<Props> = (props) => {
  const {text} = props;

  return <div>{text}</div>;
};

export default NotFound;
