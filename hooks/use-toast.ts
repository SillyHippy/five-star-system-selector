import { useCallback } from 'react';

export function useToast() {
  const toast = useCallback(({ title, description, duration = 3000 }: { title: string; description: string; duration?: number }) => {
    // For now, use alert. Replace this with your actual toast logic if needed.
    alert(`${title}: ${description}`);
  }, []);

  return { toast };
}
