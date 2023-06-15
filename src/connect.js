import React from 'react';
import { AppConfig, showConnect, UserSession } from '@stacks/connect';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const appConfig = new AppConfig(['store_write', 'publish_data']);

export const userSession = new UserSession({ appConfig });

const StyledConnectButton = styled(Button)({
  background: '#8BC34A',
  color: '#fff', 
  '&:hover': {
    background: '#C5E1A5',
  },
});

const StyledDisconnectButton = styled(Button)({
  background: '#f44336',
  color: '#fff',
  '&:hover': {
    background: '#e57373',
  },
});

const ConnectWallet = () => {
  const authenticate = () => {
    showConnect({
      appDetails: {
        name: 'jungleking',
        icon: window.location.origin + '/logo512.png',
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  };

  const disconnect = () => {
    userSession.signUserOut('/');
  };

  if (userSession.isUserSignedIn()) {
    const mainnetAddress = userSession.loadUserData().profile.stxAddress.mainnet;
    const testnetAddress = userSession.loadUserData().profile.stxAddress.testnet;

    return (
      <div>
        <StyledDisconnectButton onClick={disconnect}>
          Disconnect Wallet
        </StyledDisconnectButton>
        <Typography variant="body1" gutterBottom>
          mainnet: {mainnetAddress}
        </Typography>
        <Typography variant="body1" gutterBottom>
          testnet: {testnetAddress}
        </Typography>
      </div>
    );
  }

  return (
    <StyledConnectButton onClick={authenticate}>
      Connect Wallet
    </StyledConnectButton>
  );
};

export default ConnectWallet;
