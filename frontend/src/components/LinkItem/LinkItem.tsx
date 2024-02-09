import React from 'react';
import {Link, Typography} from '@mui/material';

interface Props {
  onClick: () => void;
  shortUrl: string | null;
}

const LinkItem: React.FC<Props>= ({onClick, shortUrl}) => {
  return (
    <>
      <Typography variant="body1" marginTop={2}>
        Shortened URL:
        <Link
          href={`http://localhost:8000/links/${shortUrl}`}
          target="_blank"
          onClick={onClick}
        >
          http://localhost:8000/links/{shortUrl}
        </Link>
      </Typography>
    </>
  );
};

export default LinkItem;