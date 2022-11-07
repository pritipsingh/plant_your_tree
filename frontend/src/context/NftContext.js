import { useState, useEffect, createContext, useRef } from "react";
import { ethers, providers, Contract} from "ethers";
import Web3Modal from "web3modal";
import { DYNAMICNFT_CONTRACT_ADDRESS, abi } from "../constants"
import { RiPlantLine } from 'react-icons/ri';
export const NftContext = createContext();

export const NftProvider = ({children}) => { 
  
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [network, setNetwork] = useState('');
  const [NFTminted, setNFTminted] = useState(false);
  const [loading, setLoading] = useState(false);
// const web3ModalRef = useRef();
let tokenid =0;
if(loading){
        <div className="container mt-3 d-flex align-items-center justify-content-center">
    <div class="card" style={{ "width": "20rem", "height": "80%" }}>
      <img class="card-img-top w-2 h-2" src={RiPlantLine} alt="Plant nft" />
      <div class="card-body">
        <h5 class="card-title">Your plant is being planted!</h5>
        <p class="card-text">Thank you for yor efforts!</p>
       
      </div>
    </div>
    </div>
}
  const mintNft = async () => {
    
     try {
      const {ethereum} = window
      
    if(ethereum) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      
      const DynamicNFTContract = new Contract(
        DYNAMICNFT_CONTRACT_ADDRESS,
        abi,
        signer,
        
      );
      console.log("DynamicNFTContract", DynamicNFTContract);
      const tx = await DynamicNFTContract.mint(address, tokenid++);
      setLoading(true);
      tokenid++;
      await tx.wait();
      
      setLoading(false);
      alert("NFT for your plant has been minted. Keep checking openSea for your dynamicNFT progress");
      console.log("minter", tx);

     }else {
      console.log("Ethereum object doesn't exist");
    }}catch(error){
      console.log(error);
     }

    }
    const checkIfAddressHasNFT = async () => {
      try{
        const {ethereum} = window;
        const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
        const DynamicNFTContract = new Contract(
          DYNAMICNFT_CONTRACT_ADDRESS,
          abi,
          signer
        );
        const address = await signer.getAddress();
        const _checkIfAddressHasNFT = await DynamicNFTContract.checkIfAddressHasNFT(address);
        setNFTminted(_checkIfAddressHasNFT);
      }catch(error){
        console.log(error);
      }
    }
  

const connectWallet = async () => {
  try {
    const { ethereum } = window

    if (!ethereum) {
      console.log('Metamask not detected')
      return
    }
    let chainId = await ethereum.request({ method: 'eth_chainId'})
    console.log('Connected to chain:' + chainId)

    const MumbaiChainId =  '0x13881' || '80001'

    if (chainId !== MumbaiChainId) {
      alert('You are not connected to the Polygon Mumbai Testnet!')
      return
    } else {
      setNetwork(true);
    }

    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

    console.log('Found account', accounts[0])
    setAddress(accounts[0])
    setWalletConnected(true);
  } catch (error) {
    console.log('Error connecting to metamask', error)
  }
} 
  
  
  return(
  <NftContext.Provider value={{
    connectWallet,
    walletConnected,
    address,
    mintNft,
    NFTminted,
    loading,
    checkIfAddressHasNFT
  }}>{children}</NftContext.Provider>
) 

}

