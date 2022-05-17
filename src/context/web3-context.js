import { createContext, useEffect, useState } from 'react';
import Web3 from 'web3';
import Web3Modal from 'web3modal';

const WEB3_SET_ERR = 'Web3 has already been set';
const USER_REJ_ERR = 'User rejected connection';
const TESTING = true;

const providerOptions = {
};

const web3Modal = new Web3Modal({
	network: TESTING ? 'rinkeby' : 'mainnet',
	cacheProvider: true,
	providerOptions,
	disableInjectedProvider: false
});

/**
 * Web3Context holds the modal and the web3 object
 * 
 * web3Modal: Web3Modal
 * web3: Web3 | undefined
 * connect: () => void
 */
export const Web3Context = createContext({
	web3Modal: web3Modal,
	web3: undefined,
	connect: undefined,
	disconnect: undefined,
	connected: false,
	address: undefined
});

/** Web3ContextProvider is a wrapper around Web3Context to encapsulate all web3 setting logic. */
export const Web3ContextProvider = ({ children }) => {
	const [web3, setWeb3] = useState();
	const [connected, setConnected] = useState(false); // This state is redundant, but is for clarity
	const [address, setAddress] = useState(undefined);

	/**
	 * Connect if there is already a cached provider.
	 */
	useEffect(async () => {
		let canceled = false;
		if (web3Modal.cachedProvider) {
			await connect();
		}

		return () => {
			canceled = true;
		}
	}, []);

	async function connect() {
		if (web3) {
			throw new Error(WEB3_SET_ERR);
		}

		try {
			const provider = await web3Modal.connect();
			const web3 = new Web3(provider);
			const address = (await web3.eth.getAccounts())[0];
			setAddress(address);
			setWeb3(web3);
			setConnected(true);
		} catch(e) {
			console.log(USER_REJ_ERR);
		}
	}

	async function disconnect() {
		if (!web3) {
			throw new Error('Web3 not set');
		}
		
		if (web3 && web3.currentProvider && web3.currentProvider.close) {
			await web3.currentProvider.close();
		}

		await web3Modal.clearCachedProvider();
		setWeb3(undefined);
		setConnected(false);
	}

	return (
		<Web3Context.Provider value={{
			web3Modal,
			web3,
			connected,
			connect,
			disconnect,
			address
		}}>
			{children}
		</Web3Context.Provider>
	)
}
