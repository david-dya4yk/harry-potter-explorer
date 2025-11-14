🌟 Harry Potter Explorer

A React + TypeScript web application for exploring Harry Potter characters and spells.
Built with Vite, React Router v7, custom fetching hooks, and SCSS modules.


🚀 Spells
🧙 Characters

Browse a full list of Harry Potter characters

Each card displays:

Name

House

Image

Click a character to view full details

Route: /character/:id

📚 Spells

View a full list of spells

Route: /spells

⚙️ Custom Data Fetching Hooks

useFetch — base fetch hook (loading, error, data)

useGetCharacters — load all characters

useGetCharacterById — load details for a specific character

useGetSpells — load spells list


Run development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Format code:

```bash
npm run format
```

Lint the code:

```bash
npm run lint
```

