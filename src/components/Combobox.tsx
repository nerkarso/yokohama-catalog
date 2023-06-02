'use client';

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

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
      value={value}
      onChange={onChange}
      options={options}
      fullWidth
      sx={{ maxWidth: 240 }}
      renderInput={(params) => (
        <TextField {...params} variant="filled" label={label} />
      )}
    />
  );
}
