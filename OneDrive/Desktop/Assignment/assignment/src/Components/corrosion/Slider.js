import * as React from 'react';
import Slider from '@mui/material/Slider';

export default function SxProp() {
  return (
    <Slider
      defaultValue={6}
      sx={{
        width: 300,
        color: 'success.main',
      }}
    />
  );
}