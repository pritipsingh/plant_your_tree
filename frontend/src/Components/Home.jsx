
import plant from '../images/plant.jpg'
import React, {useState} from 'react'
import { RiPlantLine } from 'react-icons/ri';
import { useContext } from 'react';
import { NftContext } from '../context/NftContext';




const Home = () => {
  
  const { connectWallet, loading, NFTminted, address, walletConnected, mintNft } = useContext(NftContext);
  
  const handleClick = () => {
    
    
    if(!walletConnected) {
      alert("Connect Your Wallet First!");
    }else if(NFTminted) {
      alert("You already have an NFT!");
    }else{
  
      mintNft();
      
    }


  }
  return (
    <>

    { 
      loading ? 
      
     
        <div className="container mt-3 d-flex align-items-center justify-content-center">
        <div class="card" style={{ "width": "20rem", "height": "80%" }}>
          <img class="card-img-top w-2 h-2"  alt="Plant nft" >{RiPlantLine}</img>
          <div class="card-body">
            <h5 class="card-title">Your plant is being planted!</h5>
            <p class="card-text">Thank you for yor efforts!</p>
           
          </div>
        </div>
        </div>
      
      :
      
      <div className="container mt-3 d-flex align-items-center justify-content-center">
    <div class="card" style={{ "width": "25rem", "height": "100%" }}>
      <img class="card-img-top w-10 h-8" src={plant} alt="Plant nft" />
      <div class="card-body">
        <h5 class="card-title">Mint your dynamic plant!</h5>
        <p class="card-text">Plant a tree for you better future</p>
        <button href="#" class="btn btn-dark" onClick={handleClick}>Mint Nft</button>
      </div>
    </div>
    </div>
  
  }
  </>
  )
}

export default Home
