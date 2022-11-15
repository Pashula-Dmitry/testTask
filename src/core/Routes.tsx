import {useRoutes} from 'react-router-dom';

import Main from '@pages/main';
import NotFound from '@shared/compoments/not-found';
import Layout from '@shared/compoments/layout';
import Details from '@pages/details';

const AppRoutes = (): JSX.Element => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Main />,
          children: [{index: true, path: ':id/popup', element: <Details />}],
        },
        {path: '*', element: <NotFound text={'Not Found Route'} />},
      ],
    },
  ]);
};

export default AppRoutes;
