import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import metadataArray from './_metadata.json'; // Import the metadata array from the JSON file

const cardStyles = {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
};

const mediaStyles = {
  paddingTop: '0',
  height: '100%',
  objectFit: 'cover',
};

const contentStyles = {
  flexGrow: 1,
  padding: '8px',
  backgroundColor: '#fff',
  borderTop: '1px solid rgba(0, 0, 0, 0.12)',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
};

const titleStyles = {
  marginBottom: '4px',
  fontWeight: 'bold',
};

const descriptionStyles = {
  color: 'rgba(0, 0, 0, 0.6)',
};


const GeneratedArtGrid = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const generateArtworks = async () => {
      const originalFiles = [
        'https://i.ibb.co/610CSW0/Whats-App-Image-2023-06-13-at-13-30-59-2.jpg',
        'https://i.ibb.co/dWCWwM9/Whats-App-Image-2023-06-13-at-13-30-59-3.jpg',
        'https://i.ibb.co/R4xQy9C/Whats-App-Image-2023-06-13-at-13-31-01.jpg',
        'https://i.ibb.co/hLvXZKn/Whats-App-Image-2023-06-13-at-13-31-01-1.jpg',
        'https://i.ibb.co/BTfkXzk/Whats-App-Image-2023-06-13-at-13-31-01-2.jpg',
        'https://i.ibb.co/09wqFN6/Whats-App-Image-2023-06-13-at-13-31-01-3.jpg',
        'https://i.ibb.co/Pj3XkLy/Whats-App-Image-2023-06-13-at-13-31-01-4.jpg',
        'https://i.ibb.co/T01DqmC/Whats-App-Image-2023-06-13-at-13-31-01-5.jpg',
        'https://i.ibb.co/YZN9TJ0/Whats-App-Image-2023-06-13-at-13-31-01-6.jpg'
      ];

      const generatedArtworks = originalFiles.map((derivedArtwork) => derivedArtwork);
      setArtworks(generatedArtworks);
    };

    generateArtworks();
  }, []);

  return (
    <Grid container spacing={2}>
      {artworks.map((artwork, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={cardStyles}>
            <CardMedia component="img" src={artwork} alt={metadataArray[index].name} style={mediaStyles} />
            <CardContent style={contentStyles}>
              <Typography variant="h6" style={titleStyles}>
                {metadataArray[index].name}
              </Typography>
              <Typography variant="body2" style={descriptionStyles}>
                {metadataArray[index].description}
              </Typography>
              {/* Render additional attributes from metadataArray */}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default GeneratedArtGrid;



