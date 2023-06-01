'use client';

import { Autocomplete, TextField } from '@mui/material';

export default function Combobox({
  options,
  label,
  value,
  onChange,
}: {
  options: any[];
  label: string;
  value?: any;
  onChange?: (event: any, newValue: Record<any, any>) => void;
}) {
  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: '100%', maxWidth: 240 }}
      renderInput={(params) => (
        <TextField {...params} variant="filled" label={label} />
      )}
      onChange={onChange}
    />
  );
}
