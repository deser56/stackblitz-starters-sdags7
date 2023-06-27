import React ,  { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import {Button , Stack, TextField} from '@mui/material';
import styled from '@emotion/styled';

const firebaseConfig = {
  apiKey: "AIzaSyDSuZC6Cr2Mi-wIDoyC5uITvj4k1ocBHJU",
  authDomain: "mywapp-3c496.firebaseapp.com",
  projectId: "mywapp-3c496",
  storageBucket: "mywapp-3c496.appspot.com",
  messagingSenderId: "496146449954",
  appId: "1:496146449954:web:cfdd3c13bc942ff5722c7b",
  measurementId: "G-8B5M2XMHQ9"
};



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





function handlePostMessage(event) {
  // Check if the event is coming from Uniswap
  if (event.origin.includes('https://app.uniswap.org')) {
    // Retrieve the transaction hash from the event data
    const transactionHash = event.data?.transactionHash;
    console.log('Transaction Hash:', transactionHash);
    
    // Process the transaction hash as needed
    // e.g., store it, display a success message, etc.
    try {
      const docRef = await addDoc(collection(db, "users"), {
        stxadd: stxAddress,
        ethaddr:accounts[0],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    
  }
}

function redirectToUniswap() {
  const pixeAddress = '0x6a26edf3bbc9f154ca9175216ceb9812f5305e6e';
  const uniswapURL = `https://app.uniswap.org/#/swap?outputCurrency=${pixeAddress}`;

  window.addEventListener('message', handlePostMessage);
  window.location.href = uniswapURL;
}

function Paywithpixe() {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <GreenButton variant="contained" onClick={redirectToUniswap}>
        Go to Uniswap to Swap to and pay in PIXE
      </GreenButton>
    </Stack>
  );
}



export default Paywithpixe;
