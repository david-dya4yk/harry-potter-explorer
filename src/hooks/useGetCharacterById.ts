import { useFetch } from './useFeatch.ts';
import type { Character } from '../types/character.ts';
import { config } from '../config.ts';

export function useGetCharacterById(id: string | undefined) {
  return useFetch<Character[]>(`${config.api.character}/${id}`);
}
