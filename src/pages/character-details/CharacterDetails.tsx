import { Navigate, useParams } from 'react-router-dom';
import styles from './character-details.module.scss';
import { useFetch } from '../../hooks/UseFeatch.ts';
import type { Character } from '../../types/character.ts';
import { config } from '../../config.ts';

const CharacterDetails = () => {
  const { id: paramsId } = useParams();
  const { data, loading, error } = useFetch<Character[]>(
    `${config.api.character}/${paramsId}`
  );

  if (!paramsId) return <Navigate to="/characters" replace />;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (data?.length !== 1) return <div>Something went wrong)</div>;

  const { name, house, image, actor, dateOfBirth } = data[0];

  return (
    <div className={styles.character}>
      <div className={styles.character__image}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.character__inner}>
        <h1 className={styles.character__title}>{name}</h1>
        <ul className={styles.character__bio}>
          <li>
            <span>House: </span>
            {house}
          </li>
          <li>
            <span>Date of Birth: </span>
            {dateOfBirth}
          </li>
          <li>
            <span>Actor: </span>
            {actor}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
