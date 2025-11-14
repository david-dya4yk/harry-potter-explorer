import type { Spell } from '../types/spell.ts';
import { config } from '../config.ts';
import { useFetch } from './useFeatch.ts';

export function useGetSpells() {
  return useFetch<Spell[]>(config.api.spells);
}
