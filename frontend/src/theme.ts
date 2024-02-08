import {createTheme} from '@mui/material';
const theme = createTheme({

  typography: {

    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeightRegular:600,
    fontWeightMedium:600,

    h3: {
      fontSize: 48,
      textAlign: "center",
      fontWeight: 700,
    },
  }
});

export default theme;