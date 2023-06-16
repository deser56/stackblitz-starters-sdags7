import React, { useState } from 'react';
import {Button , Stack, TextField} from '@mui/material';
import styled from '@emotion/styled';
import EthereumButton, { isWalletConnected } from './ethy';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 



const firebaseConfig = {
  apiKey: "AIzaSyDSuZC6Cr2Mi-wIDoyC5uITvj4k1ocBHJU",
  authDomain: "mywapp-3c496.firebaseapp.com",
  projectId: "mywapp-3c496",
  storageBucket: "mywapp-3c496.appspot.com",
  messagingSenderId: "496146449954",
  appId: "1:496146449954:web:cfdd3c13bc942ff5722c7b",
  measurementId: "G-8B5M2XMHQ9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


const GreenButton = styled(Button)({
  background: 'linear-gradient(45deg, #2E7D32 30%, #388E3C 90%)',
  border: 0,
  borderRadius: 8,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(0, 105, 10, .3)',
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#8BC34A',
    },
    '&:hover fieldset': {
      borderColor: '#8BC34A',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8BC34A',
    },
  },
  '& .MuiFormHelperText-root': {
    color: '#8BC34A',
  },
});


function Paywithpixe() {
  const [stxAddress, setStxAddress] = useState('');
  
  

  const handlePay = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        stxadd: stxAddress,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
          value: '100000', // 1 ETH token (in Wei)
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
  const handleStxAddressChange = (event) => {
    setStxAddress(event.target.value);
  };
  return (
    <Stack direction="row" spacing={2} alignItems="center">
   <StyledTextField
        label=" enter STX Address"
        value={stxAddress}
        onChange={handleStxAddressChange}
        variant="outlined"
        size="small"
        sx={{ flex: 1 }}
      />
    <GreenButton variant="contained" onClick={handlePay}>
      Pay with ($pixe)
    </GreenButton>
  </Stack>
);
}



export default Paywithpixe;
