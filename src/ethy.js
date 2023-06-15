import React, { useEffect, useState } from 'react';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #2E7D32 30%, #388E3C 90%)',
    border: 0,
    borderRadius: 8,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(0, 105, 10, .3)',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    background: '#FFFFFF',
    borderRadius: 8,
    marginBottom: '1rem',
  },
};

let isWalletConnected = false; // Export the variable

function EthereumButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [walletExists, setWalletExists] = useState(false);

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
      window.web3 = new Web3(window.ethereum);
    }
  }, []);

  const handleSignIn = async () => {
    try {
      const accounts = await window.web3.eth.requestAccounts();
      console.log('Signed in with Ethereum wallet:', accounts[0]);
      handleCloseModal();
      // Perform any necessary actions after signing in
      isWalletConnected = true;
    } catch (error) {
      console.error('Error signing in with Ethereum wallet:', error);
      // Handle error
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

  const displayCustomModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isWalletConnected ? (
        <button style={styles.button} onClick={handleDisconnect}>
          Disconnect Ethereum Wallet($pixe)
        </button>
      ) : (
        <button style={styles.button} onClick={conn}>
          Connect Ethereum Wallet($pixe)
        </button>
      )}

      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.card}>
            <div>
              <h5>MetaMask</h5>
              <p>
                MetaMask is a popular Ethereum wallet that provides a browser extension for easy access.
              </p>
              <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
          <div style={styles.card}>
            <div>
              <h5>MyEtherWallet</h5>
              <p>
                MyEtherWallet is a web-based wallet that allows you to generate and manage Ethereum wallets.
              </p>
              <a href="https://www.myetherwallet.com/" target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EthereumButton;
