import React, { useState } from 'react';
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
  alignItems: 'center', // Center the components vertically
  justifyContent: 'center', // Center the components horizontally
});

const StyledCard = styled(Card)({
  maxWidth: 400,
  marginBottom: 16,
  background: gradientLight,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
});

const StyledButton = styled(Button)({
  background: gradientDark,
  color: '#fff',
  '&:hover': {
    background: gradientLight,
  },
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: primaryColor,
});

const App = () => {
  const [numNFTs, setNumNFTs] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

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

  return (
    <Stack direction="column" height="100vh">
      <StyledAppBar position="static">
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
      </StyledAppBar>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
      </Menu>
       
      <StyledContainer>
        <Stack spacing={4}>
          <ConnectWallet/>
          <Typography variant="h4" gutterBottom>
            NFT Preview
          </Typography>
          <StyledCard>
            <CardMedia
              component="img"
              height="200"
              image="path/to/nft-preview-image.jpg"
              alt="NFT Preview"
            />
            <CardContent>
              <Typography variant="body1">nftz</Typography>
            </CardContent>
          </StyledCard>

          <Typography variant="h4" gutterBottom>
            Mint NFTs
          </Typography>
          <NFTMintComponent />
        </Stack>
      </StyledContainer>
    </Stack>
  );
};

export default App;


