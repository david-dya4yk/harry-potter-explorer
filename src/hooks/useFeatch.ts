import { useEffect, useState } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${url}`, { signal: controller.signal });

        if (!res.ok) {
          setError(`Request failed: ${res.status}`);
          return;
        }

        const json = await res.json();
        setData(json);
      } catch (err) {
        if ((err as { name: string }).name === 'AbortError') {
          console.log('Request aborted! Moving on...');
        } else {
          setError(err instanceof Error ? err.message : String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}
