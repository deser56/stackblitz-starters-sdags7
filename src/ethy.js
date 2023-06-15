import React, { useEffect, useState } from 'react';

export let isWalletConnected = false; // Export the variable

function EthereumButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Check if Ethereum wallet provider exists
    if (!window.ethereum) {
      // Ethereum wallet provider is not installed
      console.error('No Ethereum wallet provider found.');
      // Display a modal or popup with instructions for installing a wallet
      // For example, using a custom modal
      displayCustomModal();
    } else {
      // Ethereum wallet provider exists
      // window.web3 = new Web3(window.ethereum);
      // setIsWalletConnected(true);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      if (window.ethereum && window.ethereum.request) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        console.log('Signed in with Ethereum wallet:', accounts[0]);
        handleCloseModal();
        // Perform any necessary actions after signing in
        isWalletConnected = true;
      } else {
        console.error('Ethereum wallet provider not available.');
        // Handle error
      }
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
        <button onClick={handleDisconnect}>Disconnect Ethereum Wallet($pixe)</button>
      ) : (
        <button onClick={conn}>Connect Ethereum Wallet($pixe)</button>
      )}

      {isModalOpen && (
        <div>
          <div>
            <h5>MetaMask</h5>
            <p>
              MetaMask is a popular Ethereum wallet that provides a browser extension for easy access.
            </p>
            <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
          <div>
            <h5>MyEtherWallet</h5>
            <p>
              MyEtherWallet is a web-based wallet that allows you to generate and manage Ethereum wallets.
            </p>
            <a href="https://www.myetherwallet.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </div>
        </div>
      )}
    </>
  );
}

export default EthereumButton;

