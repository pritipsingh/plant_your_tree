import React from 'react'
import { RiPlantLine } from 'react-icons/ri';
import { useContext } from 'react';
import { NftContext } from '../context/NftContext';



const NavBar = () => {
  const { connectWallet, address, walletConnected, addNFTToWallet } = useContext(NftContext);
  const handleWallet = () => {
    connectWallet();
    }

  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><RiPlantLine /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <button type="button" className="btn btn-dark " onClick={() => handleWallet()} >{(address) ? `${address.slice(0,6)}...${address.slice(39)}` : "Connect Wallet"}</button>

          </ul>

        </div>
      </nav>
    </div>
  )
}

export default NavBar


