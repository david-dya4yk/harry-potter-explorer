import type { RouteObject } from 'react-router-dom';
import Characters from './pages/Characters.tsx';
import Spells from './pages/Spells.tsx';
import Layout from './components/layout/Layout.tsx';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Characters />,
      },
      {
        path: 'characters',
        element: <Characters />,
      },
      {
        path: 'spells',
        element: <Spells />,
      },
    ],
  },
];
