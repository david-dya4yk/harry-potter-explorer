import type { ComponentProps } from 'react';
import styles from './link.module.scss';

interface LinkProps extends Omit<ComponentProps<'a'>, 'href'> {
  href: string;
  label: string;
}

const Link = ({ href, label, ...rest }: LinkProps) => {
  return (
    <a className={styles.link} href={href} {...rest}>
      {label}
    </a>
  );
};

export default Link;
