import type { RouteObject } from 'react-router-dom';
import Characters from './pages/characters/Characters.tsx';
import CharacterDetails from './pages/character-details/CharacterDetails.tsx';
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
        path: 'characters/:id',
        element: <CharacterDetails />,
      },
      {
        path: 'spells',
        element: <Spells />,
      },
    ],
  },
];
