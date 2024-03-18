import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {

  return `$${value.toFixed(2)}`;
}

const CustomSlider = () => {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        onChange={()=> handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{
          color: (theme) => theme.palette.primary.main,
          '& .MuiSlider-rail': {
            backgroundColor: '#ccc', // Color de los extremos no seleccionados
          },
          '& .MuiSlider-track': {
            backgroundColor: '#001D3D', // Color del área seleccionada
          },
          '& .MuiSlider-thumb': {
            backgroundColor: (theme) => theme.palette.primary.main,
            border: '2px solid #001D3D', // Borde de color azul
          },
        }}
      />
    </Box>
  );
};

export default CustomSlider;



