import { Route, Routes, Navigate } from 'react-router-dom';
import { appRoutes } from './routes.list';
import { Layout } from '../components/Layout';
import { Planets } from '../features/planets';

export const AppRoutes = (): JSX.Element => (
  <Routes>
    <Route path={'*'} element={<Layout />}>
      <Route path={appRoutes.planets} element={<Planets />} />
      {/* code */}
      <Route path="*" element={<Navigate to="planets" />} />
    </Route>
  </Routes>
);
