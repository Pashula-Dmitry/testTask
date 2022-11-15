import {FC} from 'react';
import {Outlet} from 'react-router-dom';
import Header from '@shared/compoments/header';

type Props = {};

const Layout: FC<Props> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
