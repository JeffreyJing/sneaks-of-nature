import { useState, useContext, useEffect } from 'react';
import { CONTRACT_ADDRESS, MINT_TIME, REGULAR_LIMIT, REGULAR_PRICE, WHITELIST_LIMIT, WHITELIST_PRICE } from '../../constants';
import { Web3Context } from '../../context/web3-context';
import { generateMerkleProof, isUserWhitelisted } from '../../utils/merkle';
import nftAbi from '../../assets/abis/nft-abi.json';
import './index.css';

const MINT_STATE = {
	DISABLED: 'DISABLED',
	WHITELIST: 'WHITELIST',
	REGULAR: 'REGULAR'
}

export const MintNowButton = () => {
	const { connect, connected, disconnect, web3, address } = useContext(Web3Context);
	const [mintState, setMintState] = useState(MINT_STATE.DISABLED);
	const [setError] = useState(undefined);
	const [purchasing, setPurchasing] = useState(false);
	const [mintSuccess, setMintSuccess] = useState(undefined);
	const [setTotalMintedCount] = useState(undefined);
	const [setUserTotalMintedCount] = useState(undefined);
	const [userMintSize, setUserMintSize] = useState(undefined);
	const [isUserInWhitelist, setIsUserInWhitelist] = useState(false);
	const [isSecondSale, setIsSecondSale] = useState(false);
	const [isBackupSale, setIsBackupSale] = useState(false);

	/**
	 * This hook is in control of setting the total mint counter and user mint counter.
	 * 
	 * It runs a function every second to get the updated state from the contract.
	 */
	 useEffect(() => {
		let mintCounterInterval = setInterval(async () => {
			console.log("CONNECTED", connected);
			if (connected) {
				try {
					const nftContract = createContract();
					const totalSupply = await nftContract.methods.totalSupply().call();
					setTotalMintedCount(Number(totalSupply) - 1);
					const userBalance = await nftContract.methods.balanceOf(address).call();
					setUserTotalMintedCount(Number(userBalance));

					const _isSecondarySale = await nftContract.methods.isSecondSale().call();
					const _isBackupSale = await nftContract.methods.isBackupSale().call();

					setIsBackupSale(_isBackupSale);
					setIsSecondSale(_isSecondarySale);

					const isPaused = await nftContract.methods.paused().call();

					const isBeforeMintTime = Date.now() < MINT_TIME;

					setMintState(
						isPaused || isBeforeMintTime
							? MINT_STATE.DISABLED
							: MINT_STATE.WHITELIST
					);
				} catch(e) {
					console.log("ERROR", e)
				}
			}
		}, 1000);

		return () => {
			if (mintCounterInterval) {
				clearInterval(mintCounterInterval);
			}
		}
	}, [connected, mintState]);

	useEffect(() => {
		setIsUserInWhitelist(isUserWhitelisted(address));
	}, [connected, address]);

	function createContract() {
		return new web3.eth.Contract(
			nftAbi,
			CONTRACT_ADDRESS,
			{
				from: address
			}
		);
	}

	async function mint() {
		setError(undefined);
		if (
			mintState === MINT_STATE.DISABLED
			|| purchasing
		) {
			return;
		}

		setPurchasing(true);
		setMintSuccess(undefined);
		const nftContract = createContract();
		let merkleProof = [];
		if (!(isBackupSale || isSecondSale)) {
			try {
				merkleProof = generateMerkleProof(address);
			} catch(e) {
				setError("User is not whitelisted!");
				setPurchasing(false);
				setMintSuccess(undefined);
				return;
			}
		}

		const priceToUse = mintState === MINT_STATE.WHITELIST ? WHITELIST_PRICE : REGULAR_PRICE;
		const gasPrice = await web3.eth.getGasPrice();

		console.log("MERKLE", merkleProof);
		try {
			const tx = {
				from: address,
				to: CONTRACT_ADDRESS,
				value: web3.utils.toWei((priceToUse).toString(), "ether"),
				data: getDataFunction(),
			};
			const receipt = await web3.eth.sendTransaction(tx);
			setPurchasing(false);
			setError(undefined);
			setMintSuccess({
				count: userMintSize,
				transactionHash: receipt.transactionHash
			});
			setUserMintSize(0);
		} catch(e) {
			setError("There was an error when minting. " + e.message);
			setPurchasing(false);
		}

		function getDataFunction() {
			if (isBackupSale) {
				return nftContract.methods.mint().encodeABI();
			}

			if (isSecondSale) {
				return nftContract.methods.secondaryMint().encodeABI();
			}

			if (mintState === MINT_STATE.WHITELIST) {
				return nftContract.methods.presaleMint(
					web3.utils.toHex(1),
					merkleProof
				).encodeABI();
			}
		}
	}

	let mintText;
	let userMintSupplyMessage;
	switch(mintState) {
		case MINT_STATE.WHITELIST: {
			mintText = 'MINT RELICS PASS';
			userMintSupplyMessage = `You may mint a total of ${WHITELIST_LIMIT} during the whitelist phase.`
			break;
		}
		case MINT_STATE.REGULAR: {
			mintText = 'MINT RELICS PASS';
			userMintSupplyMessage = `You may mint a total of ${REGULAR_LIMIT}!`
			break;
		}
		default: {
			mintText = 'MINT RELICS PASS';
			userMintSupplyMessage = 'You cannot mint at this time.';
			break;
		}
	}

	if (purchasing) {
		mintText = 'Minting...';
	}

	return (
		<div className='mint-overall-container' id='mint'>
			{mintSuccess && (
				<div className='mint-msg mint-success'>Successfully minted {mintSuccess.size} NFTs! Transaction info: <a href={`https://etherscan.io/tx/${mintSuccess.transactionHash}`} target="_blank" rel="noopener noreferrer">{mintSuccess.transactionHash.substring(0, 9)}...</a></div>
			)}

			{connected && (
				<div className={'mint-button-connected'}>
					<a href='#' onClick={disconnect}>Connected.</a>
				</div>
			)}
			
			<button 
				className={`
					mint-button-container
					${connected && mintState === MINT_STATE.DISABLED ? 'mint-disabled' : ''}
					${purchasing ? 'mint-disabled' : ''}
					${connected && !(isSecondSale || isBackupSale) && !isUserInWhitelist ? 'mint-disabled' : ''}
				`} 
				onClick={
					connected
						? mint
						: connect
				}
			>
				{
					connected
						? mintText
						: "Connect Wallet"
				} 
			</button>
		</div>
	);
}