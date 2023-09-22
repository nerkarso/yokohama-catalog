'use client';

import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import { IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import { useBookmarks } from './useBookmarks';

export default function BookmarkItem({ item }: { item: { id: number; url: string; title: string } }) {
  const bookmarks = useBookmarks();

  return (
    <ListItem
      disablePadding
      secondaryAction={
        <IconButton edge="end" onClick={() => bookmarks.remove(item.id)}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton component={Link} href={item.url}>
        <ListItemText primary={item.title} secondary={<p className="truncate">{item.url}</p>} />
      </ListItemButton>
    </ListItem>
  );
}
