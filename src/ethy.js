import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Link, Typography } from '@mui/material';
import Web3 from 'web3';
import { styled } from '@mui/styles';

const GreenButton = styled(Button)({
  background: 'linear-gradient(45deg, #2E7D32 30%, #388E3C 90%)',
  border: 0,
  borderRadius: 8,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(0, 105, 10, .3)',
});

const WhiteCard = styled(Card)({
  background: '#FFFFFF',
  borderRadius: 8,
  marginBottom: '1rem',
});

const CardContainer = styled('div')({
  margin: '1rem',
});

let isWalletConnected = false; // Export the variable

function EthereumButton() {
  const [WalletExists, setWalletExists] = useState(false);

  useEffect(() => {
    // Check if Ethereum wallet provider exists
    if (!window.ethereum) {
      // Ethereum wallet provider is not installed
      console.error('No Ethereum wallet provider found.');
      setWalletExists(false);
    } else {
      // Ethereum wallet provider exists
      window.web3 = new Web3(window.ethereum);
      setWalletExists(true);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      const accounts = await window.web3.eth.requestAccounts();
      console.log('Signed in with Ethereum wallet:', accounts[0]);
      isWalletConnected = true;
    } catch (error) {
      console.error('Error signing in with Ethereum wallet:', error);
    }
  };

  const conn = () => {
    if (window.ethereum) {
      handleSignIn();
    } else {
      console.error('No Ethereum wallet provider found.');
    }
  };

  const handleDisconnect = () => {
    isWalletConnected = false;
  };

  return (
    <div>
      {isWalletConnected ? (
        <GreenButton variant="contained" onClick={handleDisconnect}>
          Disconnect Ethereum Wallet($pixe)
        </GreenButton>
      ) : (
        <GreenButton variant="contained" onClick={conn}>
          Connect Ethereum Wallet($pixe)
        </GreenButton>
      )}

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
    </div>
  );
}

export default EthereumButton;

