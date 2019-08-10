import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Filters() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    resource: '',
    language: ''
  });
  const [state, setState] = React.useState({
    Français: false,
    English: false,
    Arabic: false
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  const handleChecked = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { Français, English, Arabic } = state;

  return (
    <div>
      <h1>I am looking for ...</h1>
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel ref={inputLabel} htmlFor="outlined-resource-simple">
            Resource
          </InputLabel>
          <Select
            value={values.resource}
            onChange={handleChange}
            input={
              <OutlinedInput
                labelWidth={labelWidth}
                name="resource"
                id="outlined-resource-simple"
              />
            }
          >
            <MenuItem value="Parents">Parents</MenuItem>
            <MenuItem value="Youth">Youth</MenuItem>
            <MenuItem value="Services">Services</MenuItem>
            <MenuItem value="Non-profits">Non-profits</MenuItem>
          </Select>
        </FormControl>

        <FormLabel component="legend">Language</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={Français} onChange={handleChecked('Français')} value="Français" />
            }
            label="Français"
          />
          <FormControlLabel
            control={
              <Checkbox checked={English} onChange={handleChecked('English')} value="English" />
            }
            label="English"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Arabic} onChange={handleChecked('Arabic')} value="Arabic" />
            }
            label="بالعربية"
          />
        </FormGroup>
        <TextField
          id="standard-with-placeholder"
          label="Postal Code"
          placeholder="H2V 1F5"
          className={classes.textField}
          margin="normal"
        />
      </form>
    </div>
  );
}
