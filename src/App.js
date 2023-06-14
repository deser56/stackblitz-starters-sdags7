import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Stack,
  Box,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import ConnectWallet from './connect';
import NFTMintComponent from './mintf';

// Define the primary color and gradients
const primaryColor = '#8BC34A';
const gradientLight = `linear-gradient(to bottom right, ${primaryColor}, #C5E1A5)`;
const gradientDark = `linear-gradient(to bottom right, #558B2F, ${primaryColor})`;

// Styled components for customized styling
const StyledContainer = styled('div')({
  backgroundColor: '#f7f7f7',
  padding: '24px',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledCard = styled(Card)({
  marginBottom: 16,
  background: gradientLight,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: '16px',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const CardImage = styled(CardMedia)({
  height: '200px',
  borderRadius: '16px 16px 0 0',
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))`,
  borderRadius: '16px',
});

const theme = createTheme();

const App = () => {
  const [numNFTs, setNumNFTs] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cardImage, setCardImage] = useState('');

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNumNFTsChange = (event) => {
    setNumNFTs(event.target.value);
  };

  const handleMintButtonClick = () => {
    // Logic for minting the NFTs
    // You can implement the minting functionality here
    console.log(`Minting ${numNFTs} NFT(s)...`);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Fetch a random forest image from Unsplash API
    fetch('https://i.ibb.co/3BtCzTG/Whats-App-Image-2023-06-13-at-16-03-13.jpg')
      .then((response) => {
        setCardImage(response.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxShadow: 'none', backgroundColor: primaryColor }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            jungleking
          </Typography>
          <IconButton color="inherit">
            <Avatar alt="User Avatar" src="path/to/avatar.jpg" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu id="menu-appbar" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      </Menu>

      <StyledContainer>
        <ConnectWallet />
        <Typography variant="h4" gutterBottom sx={{ mt: 4, textAlign: 'center' }}>
          NFT Preview
        </Typography>
        <StyledCard>
          <CardImage component="img" image={cardImage} alt="NFT Preview" />
          <Overlay />
          <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ textAlign: 'center', color: 'white' }}>
              our roadmap
            </Typography>
          </CardContent>
        </StyledCard>

        <Typography variant="h4" gutterBottom sx={{ mt: 4, textAlign: 'center' }}>
          Mint NFTs
        </Typography>
        <NFTMintComponent />

        
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;





