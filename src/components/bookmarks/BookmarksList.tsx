'use client';

import BookmarkIcon from '@mui/icons-material/BookmarkTwoTone';
import { Alert, AlertTitle } from '@mui/material';
import List from '@mui/material/List';
import BookmarkItem from './BookmarkItem';
import { useBookmarks } from './useBookmarks';

export default function Bookmarks() {
  const bookmarks = useBookmarks();

  if (!bookmarks.items?.length) {
    return (
      <Alert severity="info" icon={<BookmarkIcon />}>
        <AlertTitle>No bookmarks</AlertTitle>
        Start adding your bookmarks
      </Alert>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border dark:border-base-800">
      <List>
        {bookmarks.items.map((item) => (
          <BookmarkItem item={item} key={item.id} />
        ))}
      </List>
    </div>
  );
}
