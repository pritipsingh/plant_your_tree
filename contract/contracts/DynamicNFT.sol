// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Next, let’s add our NFT smart contract and name the NFT token (Dynamic NFT)
contract DynamicNFT is ERC721 {
    
    string baseuri = "https:/plantednft.revise.link/1";
    constructor(string memory _baseuri) ERC721("Dynamic NFT", "dNFT") {
        baseuri = _baseuri;
    }
    mapping(address => bool) public checkIfAddressHasNFT;

    // Last but not the least, let’s add functions to enable minting and to enable setting the _baseURI().
    function mint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
        checkIfAddressHasNFT[to] = true;
    }
    function _baseURI() internal view override(ERC721) returns (string memory) {
        return baseuri;
    }
}