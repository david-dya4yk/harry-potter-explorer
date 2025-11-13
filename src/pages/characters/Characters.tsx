import { Link } from 'react-router-dom';
import styles from './characters.module.scss';
import { useFetch } from '../../hooks/UseFeatch.ts';
import type { Character } from '../../types/character.ts';

const CharactersPage = () => {
  const { data, loading, error } = useFetch<Character[]>(
    import.meta.env.VITE_API_URL_CHARACTERS
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>Not found</div>;

  const slicedData = data.slice(0, 10);

  return (
    <div className={styles.characters}>
      <ul className={styles.characters__list}>
        {slicedData.map((char: Character) => (
          <li key={char.id} className={styles.characters__item}>
            <Link to={`/characters/${char.id}`}>
              {char.image && (
                <div className={styles.characters__img}>
                  <img src={char.image} alt={char.name} />
                </div>
              )}
              <div className={styles.characters__info}>
                <h3>{char.name}</h3>
                <p>{char.house}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersPage;
