import { useState } from 'react';
import TextField from '@mui/material/TextField';

const CustomTextField = ({ defaultValue, label }: any) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    if (value === defaultValue) {
      setValue('');
    }
  };

  return (
    <TextField
      label={label}
      value={value}
      onChange={handleChange}
      onFocus={handleFocus} // Borra el valor por defecto al enfocar el campo
      InputProps={{
        style: {
          color: '#001D3D', // Color de texto cuando el usuario escribe
        },
      }}
      inputProps={{
        style: {
          color: value === defaultValue ? 'grey' : '#001D3D',
        },
      }}
    />
  );
};

export default CustomTextField;


