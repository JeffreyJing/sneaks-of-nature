import React, { useState, useContext, useEffect } from 'react';
import { Web3Context } from '../../context/web3-context';
import './index.css';
import nftAbi from '../../assets/abis/nft-abi.json';
import { CONTRACT_ADDRESS } from '../../constants';

export const MintCount = () => {
    const { connected, web3, address } = useContext(Web3Context)
    const [totalMintedCount, setTotalMintedCount] = useState(0);

    useEffect(() => {
        let mintCountInterval = setInterval(async () => {
            if (connected) {
                try {
                    const nftContract = createContract();
                    const totalSupply = await nftContract.methods.totalSupply().call();
                    setTotalMintedCount(Number(totalSupply));
                } catch(e) {
                    console.error("ERROR GETTING TOTAL SUPPLY", e);
                }
            }
        }, 1000);

        return () => {
            if (mintCountInterval) {
                clearInterval(mintCountInterval);
            }
        };
    }, [connected]);

    function createContract() {
        return new web3.eth.Contract(
            nftAbi,
            CONTRACT_ADDRESS,
            {
                from: address
            }
        )
    }

    return (
        <div className='mint-count'>
            SOLD OUT! {/*{totalMintedCount}/1000 MINTED */}
        </div>
    )
}