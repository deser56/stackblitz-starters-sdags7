import React, { useEffect, useState } from 'react';
import { Button, Modal, Card, CardContent, Link, Typography, ThemeProvider, createTheme } from '@mui/material';
import Web3 from 'web3';
import { styled } from '@mui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h4: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 500,
      marginBottom: '0.5rem',
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 400,
      marginBottom: '1rem',
    },
  },
});

const GreenButton = styled(Button)({
  background: 'linear-gradient(45deg, #2E7D32 30%, #388E3C 90%)',
  border: 0,
  borderRadius: 8,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(0, 105, 10, .3)',
});

const GreenModal = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(1),
  fontFamily: theme.typography.fontFamily,
}));

const WhiteCard = styled(Card)({
  background: '#FFFFFF',
  borderRadius: 8,
  marginBottom: '1rem',
});

const CardContainer = styled('div')({
  margin: '1rem',
});

export let isWalletConnected = false;

function EthereumButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (!window.ethereum) {
      console.error('No Ethereum wallet provider found.');
      displayCustomModal();
    } else {
      window.web3 = new Web3(window.ethereum);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const account = accounts[0];
      console.log('Signed in with Ethereum wallet:', account);
      handleCloseModal();
      isWalletConnected = true;
    } catch (error) {
      console.error('Error signing in with Ethereum wallet:', error);
      // Handle error
    }
  };

  const conn = () => {
    if (window.ethereum) {
      handleSignIn();
      return;
    }
    handleOpenModal();
  };

  const handleDisconnect = () => {
    isWalletConnected = false;
  };

  const displayCustomModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isWalletConnected ? (
        <GreenButton variant="contained" onClick={handleDisconnect}>
          Disconnect Ethereum Wallet($pixe)
        </GreenButton>
      ) : (
        <GreenButton variant="contained" onClick={conn}>
          Connect Ethereum Wallet($pixe)
        </GreenButton>
      )}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ThemeProvider theme={theme}>
          <GreenModal>
            <CardContainer>
              <WhiteCard>
                <CardContent>
                  <Typography variant="h5" component="div" color="primary">
                    MetaMask
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    MetaMask is a popular Ethereum wallet that provides a browser extension for easy access.
                  </Typography>
                  <Link href="https://metamask.io/" target="_blank" rel="noopener noreferrer" color="primary">
                    Learn More
                  </Link>
                </CardContent>
              </WhiteCard>
              <WhiteCard>
                <CardContent>
                  <Typography variant="h5" component="div" color="primary">
                    MyEtherWallet
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    MyEtherWallet is a web-based wallet that allows you to generate and manage Ethereum wallets.
                  </Typography>
                  <Link href="https://www.myetherwallet.com/" target="_blank" rel="noopener noreferrer" color="primary">
                    Learn More
                  </Link>
                </CardContent>
              </WhiteCard>
            </CardContainer>
          </GreenModal>
        </ThemeProvider>
      </Modal>
    </>
  );
}

export default EthereumButton;


