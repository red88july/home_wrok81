import {Box, Button, CircularProgress, Grid, TextField, Typography} from '@mui/material';
import ShortTextIcon from '@mui/icons-material/ShortText';
import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import {ShorURL} from '../../types';
import axiosApi from '../../axiosApi.ts';

const InputForm = () => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [loading, isLoading] = useState(false);

  const linkMutation = useMutation({
    mutationFn: async (links: ShorURL)  => {
      isLoading(true);
      try {
        const response = await axiosApi.post('/links', links);
        return  response.data;
      } finally {
        isLoading(false);
      }
    }
  });

  const handleClick = async () => {
    const result = await linkMutation.mutateAsync({
      originalUrl: inputUrl,
      shortUrl: ''
    });
    setInputUrl(result);
  };

  return (
    <Grid container marginTop={10} padding={1}>
      <Grid item xs={12}>
        <Typography variant="h3" component="div" sx={{flexGrow: 1}}>
          Shroten your links!
        </Typography>
      </Grid>
      <Grid item xs={12} marginTop={4}>
        <form>
          <TextField
            fullWidth
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            id="fullWidth"
            label="Enter URL here"/>
          <Box marginTop={1}>
            <Button
              startIcon={<ShortTextIcon />}
              fullWidth
              variant="contained"
              onClick={handleClick}
              disabled={loading}>
              {loading ? <CircularProgress /> : 'Shorten!'}
            </Button>
          </Box>
        </form>
        {inputUrl && (
          <Typography variant="body1" marginTop={2}>
            Shortened URL: <a href={inputUrl}>{inputUrl}</a>
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default InputForm;