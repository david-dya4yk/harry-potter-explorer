import { useEffect, useState } from 'react';

interface UseFetchResult {
  data: unknown[] | null;
  loading: boolean;
  error: string | null;
}

export function useFetch(url: string): UseFetchResult {
  const [data, setData] = useState<unknown[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${url}`);

        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
