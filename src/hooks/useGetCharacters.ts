import { useFetch } from './useFeatch.ts';
import type { Character } from '../types/character.ts';
import { config } from '../config.ts';

export function useGetCharacters() {
  return useFetch<Character[]>(config.api.characters);
}
