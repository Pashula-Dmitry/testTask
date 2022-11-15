import {FC, useEffect} from 'react';
import {Outlet} from 'react-router-dom';

import Launches from '@shared/compoments/Launches';
import {Container} from '@pages/main/styles';
import Filters from '@shared/compoments/filters';
import {useParams} from 'react-router-dom';

type Props = {
  [key: string]: any;
};

const Main: FC<Props> = () => {
  const {id} = useParams();

  useEffect(() => {
    id
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'visible');
  }, [id]);

  return (
    <Container>
      <Filters />
      <Launches />
      <Outlet />
    </Container>
  );
};

export default Main;
