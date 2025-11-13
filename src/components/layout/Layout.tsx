import type { PropsWithChildren } from 'react';
import { Sidebar } from '../sidebar/Sidebar.tsx';
import styles from './layout.module.scss';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
