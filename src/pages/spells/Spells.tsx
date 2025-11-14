import styles from './spells.module.scss';
import type { Spell } from '../../types/spell.ts';
import { useGetSpells } from '../../hooks/useGetSpells.ts';

const Spells = () => {
  const { data, loading, error } = useGetSpells();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Not found</div>;

  return (
    <div className={styles.spells}>
      <ul className={styles.spells__list}>
        {data.map((spell: Spell) => (
          <li key={spell.id} className={styles.spells__item}>
            <h3 className={styles.spells__title}>{spell.name}</h3>
            <p className={styles.spells__text}>{spell.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Spells;
