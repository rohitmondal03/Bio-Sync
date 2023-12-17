export function useLocalStorage(key: string) {
  const getItem: () => unknown = () => {
    try {
      const item: string | null = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.log(error);
    }
  }

  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error);
    }
  }

  return { getItem, setItem };
}