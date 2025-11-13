const env = import.meta.env;

export const config = {
  api: {
    characters: env.VITE_API_URL_CHARACTERS,
    spells: env.VITE_API_URL_SPELLS,
    character: env.VITE_API_URL_CHARACTER_BY_ID,
  },
} as const;
