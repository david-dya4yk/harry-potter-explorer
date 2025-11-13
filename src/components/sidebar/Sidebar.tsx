import type { ReactElement } from 'react';
import styles from './sidebar.module.scss';
import Link from '../link/Link.tsx';

interface SidebarItem {
  href: string;
  label: string;
}

const sidebarSections: SidebarItem[] = [
  {
    href: '/characters',
    label: 'Characters',
  },
  {
    href: '/spells',
    label: 'Spells',
  },
];

export const Sidebar = (): ReactElement => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        {sidebarSections.map((item, index) => {
          return (
            <li key={index} className={styles.sidebar__item}>
              <Link href={item.href} label={item.label} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
