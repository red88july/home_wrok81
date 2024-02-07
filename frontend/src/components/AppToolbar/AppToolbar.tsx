import {AppBar, Box, Toolbar, Typography} from '@mui/material';

const AppToolbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shortening links
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppToolbar;