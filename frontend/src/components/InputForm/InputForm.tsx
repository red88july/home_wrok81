import {Box, Button, CircularProgress, Grid, TextField, Typography} from '@mui/material';
import ShortTextIcon from '@mui/icons-material/ShortText';
import {useMutation} from '@tanstack/react-query';
import axiosApi from '../../axiosApi.ts';
import {useState} from 'react';
import {ShorURL} from '../../types';
import {useNavigate} from 'react-router';
import LinkItem from '../LinkItem/LinkItem';

const InputForm = () => {
  const [inputUrl, setInputUrl] = useState<string>('');
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const linkMutation = useMutation({
    mutationFn: async (links: ShorURL) => {
      setLoading(true);
      try {
        const response = await axiosApi.post('/links', links);
        return response.data;
      } finally {
        setLoading(false);
      }
    }
  });


  const handleClick = async () => {
    if (inputUrl) {
      const result = await linkMutation.mutateAsync({
        originalUrl: inputUrl,
        shortUrl: ''
      });
      setShortUrl(result.shortUrl);
    } else {
      alert('Please enter URL\nThis field is not to be an empty!');
    }
  };

  const redirectOriginalUrl = () => {
    if (shortUrl) {
      navigate(`${shortUrl}`);
    }
  };

  return (
    <Grid container marginTop={10} padding={1}>
      <Grid item xs={12}>
        <Typography variant="h3" component="div" sx={{flexGrow: 1}}>
          Shorten your links!
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
              startIcon={<ShortTextIcon/>}
              fullWidth
              variant="contained"
              onClick={handleClick}
              disabled={loading}>
              {loading ? <CircularProgress/> : 'Shorten!'}
            </Button>
          </Box>
        </form>
        {shortUrl && (
          <LinkItem
            onClick={redirectOriginalUrl}
            shortUrl={shortUrl}/>
        )}
      </Grid>
    </Grid>
  );
};

export default InputForm;