import { Outlet } from 'react-router-dom';
import { Sidebar } from '../sidebar/Sidebar.tsx';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
