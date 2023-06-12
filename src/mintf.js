import React, { useState } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { Storage } from '@stacks/storage';
import { openContractCall, stringAsciiCV, stringUtf8CV } from '@stacks/transactions';
import { Button, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { userSession } from './connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
//const userSession = new UserSession({ appConfig });
const storage = new Storage({ userSession });

const StyledButton = styled(Button)({
  background: '#8BC34A',
  color: '#fff',
  '&:hover': {
    background: '#C5E1A5',
  },
});

const NFTMintComponent = () => {
  const [isPending, setIsPending] = useState(false);

  const handleConnectAndUpload = async () => {
    try {
      // Check if the user is already authenticated
      if (!userSession.isUserSignedIn()) {
        // If not, prompt the user to connect
        await handleConnect();
        return;
      }

      // User is already authenticated, proceed with file upload and minting
      const fileInput = document.getElementById('file-input');
      const file = fileInput.files[0];
      await handleFileUpload(file);
    } catch (error) {
      // Handle any errors that occurred during the process
      console.error('Error handling file upload:', error);
      // Provide user feedback on the error
    }
  };

  const handleConnect = async () => {
    try {
      await showConnect({
        appDetails: {
          name: 'jungleking',
          icon: window.location.origin + '/my-app-logo.svg',
        },
        redirectTo: '/',
        finished: () => {
          // User authentication is complete
          // Proceed with file upload and minting
          const fileInput = document.getElementById('file-input');
          const file = fileInput.files[0];
          handleFileUpload(file);
        },
      });
    } catch (error) {
      // Handle any errors that occurred during user authentication
      console.error('Error during user authentication:', error);
      // Provide user feedback on the error
    }
  };

  const handleFileUpload = async (file) => {
    try {
      const fileName = file.name;
      const fileData = await readFileData(file);

      // Store the file using Gaia storage
      const fileUrl = await storeFile(fileName, fileData);

      // Mint the NFT on the blockchain
      await mintNFT(fileName, fileUrl);
    } catch (error) {
      // Handle any errors that occurred during the file upload and minting process
      console.error('Error handling file upload:', error);
      // Provide user feedback on the error
    }
  };

  const readFileData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const data = reader.result;
        resolve(data);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const storeFile = async (fileName, fileData) => {
    try {
      const options = {
        encrypt: true,
      };

      // Store the file using Gaia storage
      const fileUrl = await storage.putFile(fileName, fileData, options);

      return fileUrl;
    } catch (error) {
      // Handle any errors that occurred during the file storage
      console.error('Error storing file using Gaia:', error);
      throw error;
    }
  };

  const mintNFT = async (name, fileURL) => {
    try {
      // Get the user's authentication token
      const authToken = userSession.authResponseToken();

      // Construct the contract call function arguments
      const functionArgs = [stringAsciiCV(name), stringUtf8CV(fileURL)];

      // Construct the contract call options
      const options = {
        contractAddress: 'your-contract-address',
        contractName: 'your-contract-name',
        functionName: 'mint',
        functionArgs,
        appDetails: {
          name: 'jungleking',
          icon: window.location.origin + '/my-app-logo.svg',
        },
        onFinish: (data) => {
          // Handle the contract call result
          handleMintTransactionResult(data);
        },
      };

      // Execute the mint contract call
      await openContractCall(options);
    } catch (error) {
      // Handle any errors that occurred during the minting process
      console.error('Error minting NFT:', error);
      // Provide user feedback on the error
    }
  };

  const handleMintTransactionResult = (data) => {
    try {
      // Check if the contract call was successful or handle any error cases
      if (data.txId) {
        // The contract call was successful and a transaction ID is available
        // Provide user feedback on the successful minting
        console.log('NFT minted successfully!');
        console.log('Transaction ID:', data.txId);
      } else {
        // The contract call failed
        // Provide user feedback on the failure
        console.error('Failed to mint NFT.');
      }
    } catch (error) {
      // Handle any errors that occurred during the handling of the contract call result
      console.error('Error handling mint transaction result:', error);
    }
  };

  return (
    <Box>
      <input type="file" id="file-input" />
      <StyledButton onClick={handleConnectAndUpload} disabled={isPending}>
        {isPending ? 'Minting NFT...' : 'mint nft'}
      </StyledButton>
    </Box>
  );
};

export default NFTMintComponent;


