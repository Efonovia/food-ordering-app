import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags(props) {
  // const [selectedTags, setSelectedTags] = React.useState([]);

  // const handleTagsChange = (event, values) => {
  //   if (values.length <= 3) {
  //     setSelectedTags(values)
  //     console.log(values)
  //   }
  // }

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      size='large'
      options={props.options}
      disableCloseOnSelect
      getOptionLabel={(option) => option}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option}
        </li>
      )}
      value={props.value}
      onChange={(event, value) => props.onNutritionalContentChange(value)}
      style={{ width: props.width }}
      renderInput={(params) => (
        <TextField {...params} label={props.label} placeholder={props.placeholder} 
        sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#ea2251', // Change the border color when focused
                borderWidth: '2px', // Adjust the border width when focused
              },
              '&:hover fieldset': {
                borderColor: '#ea2251', // Optional: Change the border color on hover
              },
            },
          }}
        />
      )}
      limitTags={4}
    />
  );
}