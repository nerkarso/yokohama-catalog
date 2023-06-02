'use client';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MSelect, { SelectChangeEvent } from '@mui/material/Select';

export default function Select({
  name,
  label,
  value,
  onChange,
  options,
}: {
  name: string;
  label: string;
  value: any;
  onChange: (event: SelectChangeEvent) => void;
  options: Array<{ label: string; value: any }>;
}) {
  return (
    <FormControl variant="filled" fullWidth>
      <InputLabel id={name}>{label}</InputLabel>
      <MSelect id={name} name={name} value={value} onChange={onChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MSelect>
    </FormControl>
  );
}
