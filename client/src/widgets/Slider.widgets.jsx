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

export default function RangeSlider(props) {

  return (
    <Box sx={{ width: "100%" }}>
        <Slider
            getAriaLabel={() => 'Temperature range'}
            value={[props.value.min, props.value.max]}
            onChange={props.handleSliderChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            step={100}
            min={100}
            sx={{color: "#ea2251"}}
            max={10000}
        />
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item>
                #<Input
                    value={props.value.min}
                    name="first"
                    size="small"
                    onChange={props.handleInputChange}
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
                    value={props.value.max}
                    name="second"
                    size="small"
                    onChange={props.handleInputChange}
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
