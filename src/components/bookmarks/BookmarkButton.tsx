'use client';

import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import BookmarkAddTwoTone from '@mui/icons-material/BookmarkAddTwoTone';
import CloseTwoTone from '@mui/icons-material/CloseTwoTone';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grow,
  IconButton,
  Slide,
  Snackbar,
  TextField,
  Tooltip,
} from '@mui/material';
import { useBookmarks } from './useBookmarks';

export default function BookmarkButton() {
  const url = window.location.pathname + window.location.search;

  const bookmarks = useBookmarks();
  const [dialogOpened, dialogHandlers] = useDisclosure(false);
  const [snackbarOpened, snackbarHandlers] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      title: '',
    },
    validate: {
      title: (value) => (value.length < 1 ? 'Title is required' : null),
    },
  });
  const formTitleProps = form.getInputProps('title');
  const handleSubmit = form.onSubmit((values) => {
    bookmarks.add({
      title: values.title,
      url,
    });
    dialogHandlers.close();
    form.reset();
    snackbarHandlers.open();
  });

  return (
    <>
      <IconButton color="primary" onClick={dialogHandlers.open}>
        <BookmarkAddTwoTone />
      </IconButton>
      <Dialog open={dialogOpened} onClose={dialogHandlers.close} TransitionComponent={Grow} transitionDuration={250}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Bookmark</DialogTitle>
          <DialogContent>
            <DialogContentText>Save these filters as a bookmark for later.</DialogContentText>
            <TextField
              autoFocus
              margin="normal"
              label="Title"
              type="text"
              variant="filled"
              value={formTitleProps.value}
              onChange={(e) => formTitleProps.onChange(e.target.value)}
              error={Boolean(formTitleProps.error)}
              helperText={formTitleProps.error}
              fullWidth
            />
            <Tooltip title={url}>
              <p className="text-sm text-base-500 truncate max-w-xs">{url}</p>
            </Tooltip>
          </DialogContent>
          <DialogActions>
            <Button onClick={dialogHandlers.close}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        message="Bookmark added"
        autoHideDuration={3000}
        open={snackbarOpened}
        onClose={snackbarHandlers.close}
        TransitionComponent={Slide}
        action={
          <IconButton size="small" color="inherit" onClick={snackbarHandlers.close}>
            <CloseTwoTone fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
}
