import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import MuiInput from '@mui/material/Input';


function valuetext(value) {
  return `${value}°C`;
}

const Input = styled(MuiInput)`
  width: 70px;
`;

export default function RangeSlider() {
  const [value, setValue] = React.useState({min: 1000, max: 9000});

  const handleChange = (event, newValue) => {
    setValue({min: newValue[0], max: newValue[1]});
  };

  const handleInputChange = (event) => {
    console.log(event.target.name, event.target.value)
    if(event.target.name === "first") {
        setValue(prev =>  {
          return {...prev, min: event.target.value === '' ? 0 : Number(event.target.value)}
        })
    }
    if(event.target.name === "second") {
      setValue(prev =>  {
        return {...prev, max: event.target.value === '' ? 0 : Number(event.target.value)}
      })
    }
  };


  return (
    <Box sx={{ width: "100%" }}>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={[value.min, value.max]}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            step={100}
            min={100}
            max={10000}
        />
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
                #<Input
                    value={value.min}
                    name="first"
                    size="small"
                    onChange={handleInputChange}
                    inputProps={{
                    step: 100,
                    min: 100,
                    max: 10000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
            <Grid item>
                #<Input
                    value={value.max}
                    name="second"
                    size="small"
                    onChange={handleInputChange}
                    inputProps={{
                    step: 100,
                    min: 100,
                    max: 10000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                    }}
                />
            </Grid>
        </Grid>
    </Box>
  );
}
