import {Box, Button, Grid, TextField, Typography} from '@mui/material';
import ShortTextIcon from '@mui/icons-material/ShortText';

const InputForm = () => {
  return (
    <Grid container marginTop={10} padding={1}>
      <Grid item xs={12}>
        <Typography variant="h3" component="div" sx={{flexGrow: 1}}>
          Shroten your links!
        </Typography>
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <form>
          <TextField fullWidth id="fullWidth" label="Enter URL here"/>
          <Box marginTop={1}>
            <Button
              startIcon={<ShortTextIcon />}
              fullWidth
              variant="contained">
              Shorten!
            </Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default InputForm;