import React ,  { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import {Button , Stack, TextField} from '@mui/material';
import styled from '@emotion/styled';

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






function redirectToUniswap() {
  const pixeAddress = '0x6a26edf3bbc9f154ca9175216ceb9812f5305e6e';
  const uniswapURL = `https://app.uniswap.org/#/swap?outputCurrency=${pixeAddress}`;

  window.open(uniswapURL, '_blank');
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
