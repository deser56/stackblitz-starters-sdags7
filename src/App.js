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
  Box,
  createTheme,
  ThemeProvider,
  useMediaQuery,
  CssBaseline,
  Stack
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
// import ConnectWallet from './connect';
import GeneratedArtGrid from './preview';
import EthereumButton,{isWalletConnected} from './ethy';
import Paywithpixe from './paywithpixe';
import LinksComponent from './links';

const primaryColor = '#8BC34A';
const gradientLight = `linear-gradient(to bottom right, ${primaryColor}, #C5E1A5)`;

{/*const StyledContainer = styled('div')({
  backgroundImage: 'url(https://i.ibb.co/Cs9W0H2/Jungle-King.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: '#f7f7f7',
  padding: '24px',
});*/}

const StyledContainer = styled('div')({
  backgroundColor: '#f7f7f7',
  padding: '24px',
});

const StyledCard = styled(Card)({
  marginBottom: '16px',
  background: gradientLight,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: '16px',
  width: '100%',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
});

const CardContentWrapper = styled(CardContent)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: 'hidden',
        },
      },
    },
  },
});

const App = () => {
  const [numNFTs, setNumNFTs] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [cardImage, setCardImage] = useState('');

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNumNFTsChange = (event) => {
    setNumNFTs(event.target.value);
  };

  const handleMintButtonClick = () => {
    window.location.href = 'https://create.gamma.io/collection/jungleking-ai';
  };
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
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
      <CssBaseline />
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
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Typography variant="body2" color="textSecondary" align="center">
      <span style={{ fontSize: '0.8rem' }}>connect First</span>
      <br />
      <span style={{ fontSize: '0.8rem' }}>for Successful Transaction</span>
      <br />
    </Typography>
        </Box>
        
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
           < EthereumButton />
        </Box>

        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Paywithpixe />
        </Box>

        <Typography variant="h4" gutterBottom sx={{ mt: 4, textAlign: 'center' }}>
          NFT Preview
        </Typography>
        <GeneratedArtGrid />

        <Box sx={{ mt: 4 }}>
          <StyledCard>
            <CardMedia
              component="img"
              image={cardImage}
              alt="NFT Preview"
              style={{ borderRadius: '16px 16px 0 0', objectFit: 'cover' }}
            />
            <CardContentWrapper>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                Our RoadMap
              </Typography>
            </CardContentWrapper>
          </StyledCard>
        </Box>

        <Typography variant="h4" gutterBottom sx={{ mt: 4, textAlign: 'center' }}>
          Mint NFTs
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
         <Button
         variant="contained"
         onClick={handleMintButtonClick}
         sx={{
         minWidth: '200px',
         backgroundColor: '#8BC34A',
         '&:hover': {
            backgroundColor: '#7CB342',
         },
         }}
         >
           Mint In Stacks 
          </Button>
         </Box>
         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
           <LinksComponent />
           </Box>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default App;





