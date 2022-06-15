import { useEffect, useState, useContext } from 'react';
import { SneaksSmaller } from '../../assets/icons/logos';
import { Web3Context } from '../../context/web3-context';
import punksAirdropAbi from '../../assets/abis/punks-airdrop-abi.json';
import relicPunksAbi from '../../assets/abis/relic-punks-abi.json';
import punksBurnerAbi from '../../assets/abis/burn-abi.json';
import { BURN_ADDRESS, BURN_RELIC_PUNKS_AIRDROP_ADDRESS, RELIC_PUNKS_ADDRESS } from '../../constants';
import './index.css';

const BurnPunks = () => {
    const { connect, connected, address, web3 } = useContext(Web3Context);
	const [width, setWidth] = useState(window.innerWidth);
    const [userPointCount, setUserPointCount] = useState(0);
    const [punkIdsAvailable, setPunkIdsAvailable] = useState([]);
    const [oneDimensionalPunksAvailable, setOneDimensionalPunksAvailable] = useState([]);
    // { punkType: 'punk' | '1d-punk', id: number }
    const [selectedPunkToBurn, setSelectedPunkToBurn] = useState(undefined);
    const [isApproved, setIsApproved] = useState(false);
    
	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(async () => {

            if (!connected || !selectedPunkToBurn) {
                return;
            }

            try {
                if (selectedPunkToBurn.punkType === 'punk') {
                    const relicPunksContract = new web3.eth.Contract(
                        relicPunksAbi,
                        RELIC_PUNKS_ADDRESS,
                        {
                            from: address
                        }
                    );

                    const _isApproved = await relicPunksContract.methods.isApprovedForAll(address, BURN_ADDRESS).call();
                    setIsApproved(_isApproved);
                } else if (selectedPunkToBurn.punkType === '1d-punk') {
                    const punksAirdropContract = new web3.eth.Contract(
                        punksAirdropAbi,
                        BURN_RELIC_PUNKS_AIRDROP_ADDRESS,
                        {
                            from: address
                        }
                    );
                    const _isApproved = await punksAirdropContract.methods.isApprovedForAll(address, BURN_ADDRESS).call();
                    setIsApproved(_isApproved);
                }
            } catch (e) {
                console.log("ERROR getting punk to burn", e)
            }
        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [selectedPunkToBurn]);

    /**
     * This useEffect hooks grabs all the state updates
     */
    useEffect(() => {
        const interval = setInterval(async () => {

            if (!connected) {
                return;
            }

            try {
                const relicPunksContract = new web3.eth.Contract(
                    relicPunksAbi,
                    RELIC_PUNKS_ADDRESS,
                    {
                        from: address
                    }
                );

                const punksAirdropContract = new web3.eth.Contract(
                    punksAirdropAbi,
                    BURN_RELIC_PUNKS_AIRDROP_ADDRESS,
                    {
                        from: address
                    }
                );

                const punkBurnerContract = new web3.eth.Contract(
                    punksBurnerAbi,
                    BURN_ADDRESS,
                    {
                        from: address
                    }
                )

                const _punkIdsAvailable = await relicPunksContract.methods.walletOfOwner(address).call();
                const _oneDimensionalPunksCount = await punksAirdropContract.methods.balanceOf(address).call();
                const _oneDimensionalPunksPromises = [];
                for (let i = 0; i < _oneDimensionalPunksCount; i++) {
                    _oneDimensionalPunksPromises.push(
                        punksAirdropContract.methods.tokenOfOwnerByIndex(address, i).call()
                    );
                }
                const _oneDimensionalPunksOwned = (await Promise.allSettled(_oneDimensionalPunksPromises)).map(d => d.value);

                const _pointCount = await punkBurnerContract.methods.pointCounter(address).call();

                setPunkIdsAvailable(_punkIdsAvailable);
                setOneDimensionalPunksAvailable(_oneDimensionalPunksOwned);
                setUserPointCount(_pointCount);
            } catch(e) {
                console.log("ERROR", e);
            }

        }, 1000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [connected]);

    async function approve() {
        try {
            if (selectedPunkToBurn.punkType === 'punk') {
                const relicPunksContract = new web3.eth.Contract(
                    relicPunksAbi,
                    RELIC_PUNKS_ADDRESS,
                    {
                        from: address
                    }
                );
    
                const tx = {
                    from: address,
                    to: RELIC_PUNKS_ADDRESS,
                    value: web3.utils.toWei('0', 'ether'),
                    data: relicPunksContract.methods.setApprovalForAll(BURN_ADDRESS, true).encodeABI()
                };
                const receipt = await web3.eth.sendTransaction(tx);
                console.log("SUCCESS", receipt);
            } else if (selectedPunkToBurn.punkType === '1d-punk') {
                const punksAirdropContract = new web3.eth.Contract(
                    punksAirdropAbi,
                    BURN_RELIC_PUNKS_AIRDROP_ADDRESS,
                    {
                        from: address
                    }
                );
                const tx = {
                    from: address,
                    to: BURN_RELIC_PUNKS_AIRDROP_ADDRESS,
                    value: web3.utils.toWei('0', 'ether'),
                    data: punksAirdropContract.methods.setApprovalForAll(BURN_ADDRESS, true).encodeABI()
                };
                const receipt = await web3.eth.sendTransaction(tx);
                console.log("SUCCESS", receipt);
            }
        } catch (e) {
            console.log("ERROR, failed approval", e)
        }
    }

    async function burn() {
        try {
            const punkBurnerContract = new web3.eth.Contract(
                punksBurnerAbi,
                BURN_ADDRESS,
                {
                    from: address
                }
            );

            let data;

            if (selectedPunkToBurn.punkType === 'punk') {
                data = punkBurnerContract.methods.burnRelicPunk(selectedPunkToBurn.id).encodeABI();
            } else if (selectedPunkToBurn.punkType === '1d-punk') {
                data = punkBurnerContract.methods.burnOneDimensional(selectedPunkToBurn.id).encodeABI();
            }

            const tx = {
                from: address,
                to: BURN_ADDRESS,
                value: web3.utils.toWei('0', 'ether'),
                data
            };
            const receipt = await web3.eth.sendTransaction(tx);
            console.log("SUCCESS", receipt);
            } catch(e) {
            console.log("ERROR DURING BURN", e);
        }
    }

    const selectedPunkType = selectedPunkToBurn?.punkType;
    const selectedPunkId = selectedPunkToBurn?.id;

    const approveButtonDisabled = (selectedPunkType === undefined) ? true : (isApproved ? true : false);
    const burnButtonDisabled = (selectedPunkType === undefined || !isApproved);

    return (
        <div className='burn-punks'>
            <div className='bp-header'>
                <div className='bp-logo'>
                    <SneaksSmaller />
                </div>
                <div className='bp-connect'>
                    <button onClick={connected ? undefined : connect} className={`${connected ? 'bp-btn-connected' : ''}`}>
                        {connected ? 'CONNECTED' : 'CONNECT WALLET'}
                    </button>
                </div>
            </div>
            <div className='bp-point-counter'>
                {connected && <>You have {userPointCount} points.</>}
                {!connected && <>&nbsp;</>}
            </div>
            <div className='bp-section-header'>
                <div><h2>RELIC PUNKS AVAILABLE:</h2></div>
                <div>Value = 1 Punk</div>
            </div>
            <div className='bp-punk-container'>
                {punkIdsAvailable.length > 0 && (
                    punkIdsAvailable.map((id) => (<div className='bp-punk-available' key={`punk-${id}`}>
                        <div
                            
                            className={`bp-punk-available-item ${selectedPunkType === 'punk' && selectedPunkId === id ? 'selected' : ''}`}
                            onClick={() => selectedPunkType === 'punk' && selectedPunkId === id ? setSelectedPunkToBurn(undefined) : setSelectedPunkToBurn({ punkType: 'punk', id })}
                        >
                            &#x23;{id}
                        </div>
                    </div>))
                )}
            </div>

            <div className='bp-section-header'>
                <div><h2>THE ONE DIMENSIONAL PUNK:</h2></div>
                <div>Value = 0.5 Punk</div>
            </div>
            <div className='bp-punk-container'>
                {oneDimensionalPunksAvailable.length > 0 && (
                    oneDimensionalPunksAvailable.map((id) => (<div className='bp-punk-available' key={`airdrop-punk-${id}`}>
                        <div
                            
                            className={`bp-punk-available-item ${selectedPunkType === '1d-punk' && selectedPunkId === id ? 'selected' : ''}`}
                            onClick={() => selectedPunkType === '1d-punk' && selectedPunkId === id ? setSelectedPunkToBurn(undefined) : setSelectedPunkToBurn({ punkType: '1d-punk', id })}
                        >
                            {/** TODO: Replace with images */}
                            &#x23;{id}
                        </div>
                    </div>))
                )}
            </div>

            <div className='bp-instructions'>
                <ol>
                    <li>Select a Punk to burn.</li>
                    <li>The One Dimensional Punk &#x28;airdropped to holders of the Surprise Punk&#x29; is worth the value of .5 Punks. All other Punks hold the value of one. </li>
                    <li>Approve the burner contract to burn Relic Punks or One Dimensional Punks, then press Burn Punks to execute the transaction.</li>
                    <li>Once you have burned the value of three Relic Punks, your wallet address will be added to the Sneaks List. You will have the opportunity to mint a Sneaks of Nature NFT for 0.33 ETH.</li>
                </ol>
            </div>

            <div className='bp-burn-button'>
                <button className={`${approveButtonDisabled ? 'bp-burn-disabled' : ''}`} onClick={approveButtonDisabled ? undefined : () => approve()}>APPROVE</button>
                <button className={`${burnButtonDisabled ? 'bp-burn-disabled' : ''}`} onClick={burnButtonDisabled ? undefined : () => burn()}>BURN PUNKS</button>
            </div>
        </div>
    );
}

export default BurnPunks;