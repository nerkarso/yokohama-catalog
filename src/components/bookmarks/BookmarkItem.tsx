'use client';

import DeleteTwoTone from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useBookmarks } from './useBookmarks';

export default function BookmarkItem({ item }: { item: { id: number; url: string; title: string } }) {
  const bookmarks = useBookmarks();

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" onClick={() => bookmarks.remove(item.id)}>
          <DeleteTwoTone />
        </IconButton>
      }
    >
      <ListItemButton component="a" href={item.url}>
        <ListItemText primary={item.title} secondary={<p className="truncate">{item.url}</p>} />
      </ListItemButton>
    </ListItem>
  );
}
