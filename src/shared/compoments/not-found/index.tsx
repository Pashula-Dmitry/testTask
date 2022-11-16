import {FC} from 'react';
import {Link} from 'react-router-dom';

type Props = {
  text: string;
};

const NotFound: FC<Props> = (props) => {
  const {text} = props;

  return (
    <div>
      <p>{text}</p>
      <Link to={'/'}>Go main</Link>
    </div>
  );
};

export default NotFound;
