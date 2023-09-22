import { useLocalStorage } from '@mantine/hooks';

type Bookmark = {
  id: number;
  title: string;
  url: string;
};

export function useBookmarks() {
  const [items, setItems] = useLocalStorage<Bookmark[]>({ key: 'bookmarks', defaultValue: [] });

  const add = ({ title, url }: { title: string; url: string }) => {
    setItems((items) => [...items, { id: items.length + 1, title, url }]);
  };

  const remove = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return {
    items,
    add,
    remove,
  };
}
