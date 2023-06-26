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
        'https://i.ibb.co/CJB7tV9/1.png',
        'https://i.ibb.co/2jCN5X2/2.png',
        'https://i.ibb.co/dmjMhk3/3.png',
        'https://i.ibb.co/mq65sVb/4.png',
        'https://i.ibb.co/0h45YMC/5.png',
        'https://i.ibb.co/BjcgPXt/6.png',
        'https://i.ibb.co/LgCg2Wr/7.png',
        'https://i.ibb.co/tYVcYs3/8.png',
        'https://i.ibb.co/tQgnVSN/9.png',
        'https://i.ibb.co/qDcRqjS/10.png',
        'https://i.ibb.co/FzLrZF6/11.png',
        'https://i.ibb.co/h9JCgRp/12.png',
        'https://i.ibb.co/JrJtBPw/13.png',
        'https://i.ibb.co/179nXyD/14.png',
        'https://i.ibb.co/fN9yW41/15.png',
        'https://i.ibb.co/HVjqhRz/16.png',
        'https://i.ibb.co/X7vfVgr/17.png',
        'https://i.ibb.co/ZGB4Z3d/18.png',
        'https://i.ibb.co/YQpcWRy/19.png',
        'https://i.ibb.co/Gcdt1t4/20.png',
        'https://i.ibb.co/ZVFZyDq/Whats-App-Image-2023-06-22-at-01-06-41.jpg'
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



