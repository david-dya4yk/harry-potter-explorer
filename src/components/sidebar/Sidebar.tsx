import type { ReactElement } from 'react';
import styles from './sidebar.module.scss';
import { Link } from 'react-router-dom';

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
              <Link className={styles.sidebar__link} to={item.href}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
