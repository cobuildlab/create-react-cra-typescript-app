import { createStyles, withStyles } from '@mui/styles';
import { TextField as MuiTexfield, TextFieldProps } from '@mui/material';
import React from 'react';

const TextField = withStyles(() =>
  createStyles({
    root: {
      '& .MuiInputBase-root': {
        background: '#fff',
        color: '#181518',
        '& fieldset': {
          border: '3px solid #CCCCCC',
          boxSizing: 'borderbox',
          borderRadius: '12px',
        },
        '& .MuiInputAdornment-root': {
          color: '#CCCCCC',
        },
      },
      '&:focus': {
        '& .MuiInputBase-root fieldset': {
          border: '3px solid #5BC2BA',
        },
      },
      /* '& label.Mui-focused': {
        color: 'white',
      }, */
      margin: '20px 10px',
    },
  }),
)(MuiTexfield);

/**
 * @param {TextFieldProps} props - Textfield Props.
 * @returns {JSX.Element} - Cases view.
 */
export const CustomInput: React.FC<TextFieldProps> = (
  props: TextFieldProps,
) => <TextField variant="outlined" {...props} />;
