import React, { useState } from 'react';
import {Button} from '@mui/material';
import styled from '@emotion/styled';
// import EthereumButton, { isWalletConnected } from './ethy';

const GreenButton = styled(Button)({
  background: 'linear-gradient(45deg, #2E7D32 30%, #388E3C 90%)',
  border: 0,
  borderRadius: 8,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(0, 105, 10, .3)',
});

function Paywithpixe() {
  const handlePay = async () => {
    if (!isWalletConnected) {
      console.error('Wallet is not connected.');
      return;
    }

    const tokenAddress = '0x6a26edf3bbc9f154ca9175216ceb9812f5305e6e';
    const recipientAddress = '0xa98eE461688c0f670DA0492aD8A0733E6c916106'; // Replace with the desired recipient address

    try {
      if (window.ethereum && window.ethereum.request) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        const fromAddress = accounts[0];
        const transactionParameters = {
          from: fromAddress,
          to: tokenAddress,
          value: '1000000000000000000', // 1 ETH token (in Wei)
          data: `0x40c10f19${recipientAddress.slice(2)}`, // Function signature + recipient address
        };

        const result = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });
        console.log('Payment sent:', result);
        // Handle payment success
      } else {
        console.error('Ethereum wallet provider not available.');
        // Handle error
      }
    } catch (error) {
      console.error('Error sending payment:', error);
      // Handle error
    }
  };

  return (
      
      <GreenButton variant="contained" onClick={handlePay}>
          Pay with ($pixe)
        </GreenButton>
     
  );
}

export default Paywithpixe;
