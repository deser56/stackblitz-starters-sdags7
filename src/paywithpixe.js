import React ,  { useState } from 'react';
// import Web3 from 'web3';
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


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const tokenABI = [
  // Paste the ABI of the token contract here
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "MintingNotAllowed",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MAX_SUPPLY",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  "name": "transfer",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "from",
      "type": "address"
    },
    {
      "internalType": "address",
      "name": "to",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "amount",
      "type": "uint256"
    }
  ],
  "name": "transferFrom",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "nonpayable",
  "type": "function"
}
];

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




async function openWallet() {
  try {
    // Check if the user has a connected wallet
    if (!window.ethereum) {
      throw new Error('No Ethereum provider found. Please make sure you have a wallet installed.');
    }

    // Request access to the user's accounts
    await window.ethereum.enable();

    // Wallet is now open and connected

    console.log('Wallet is now open and connected.');
  } catch (error) {
    console.error('Error occurred while opening the wallet:', error.message);
  }
}







async function sendMessageToSign(recipientAddress, message,stxAddress) {
  try {
    // Check if the user has a connected wallet
    if (!window.ethereum) {
      throw new Error('No Ethereum provider found. Please make sure you have a wallet installed.');
    }

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

    // Get the current selected account
    const selectedAccount = accounts[0];

    // Convert the message to a byte array
    const messageBytes = Buffer.from(message);

    // Sign the message using the Ethereum provider
    const signature = await window.ethereum.request({
      method: 'personal_sign',
      params: [messageBytes.toString('hex'), selectedAccount],
      from: selectedAccount
    });

    console.log('Message signed successfully! Signature:', signature);

    // Send the signed message to your backend for verification
    
    try {
      const docRef = await addDoc(collection(db, "users"), {
        stxadd: stxAddress,
        ethaddr: selectedAccount,
        recipient: recipientAddress,
        message: message,
        signature: signature
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  } catch (error) {
    console.error('Error occurred during message signing:', error.message);
  }
}





function Paywithpixe() {

  const [stxAddress, setStxAddress] = useState('');

  const handleStxAddressChange = (event) => {
    setStxAddress(event.target.value);
  };
  
  const handleTokenTransfer = () => {
    const tokenAddress = '0x6a26edf3bbc9f154ca9175216ceb9812f5305e6e';
    const recipientAddress = '0xa98eE461688c0f670DA0492aD8A0733E6c916106';
    const amount = '10000000000000';
    const gasPrice = '0.0001'; // Set your desired gas price in Gwei

    // Perform the token transfer with the suggested gas price
    sendMessageToSign(recipientAddress, 'send 21000 pixe to 0xa98eE461688c0f670DA0492aD8A0733E6c916106 if you need the token address for swapping  it is  0x6a26edf3bbc9f154ca9175216ceb9812f5305e6e',stxAddress);
    openWallet();

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
      <GreenButton variant="contained" onClick={handleTokenTransfer}>
        Pay with ($pixe)
      </GreenButton>
    </Stack>
  );
}

export default Paywithpixe;

