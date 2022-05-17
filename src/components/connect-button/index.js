import React, { useContext } from 'react';
import { Web3Context } from '../../context/web3-context';
import './index.css';

const ConnectButton = () => {
	const { connect, connected } = useContext(Web3Context);

	return (
		<div>
			<button
				className={`connect-button-container ${connected ? 'connect-connected' : ''}`}
				onClick={() => {
					if (!connected) {
						connect();
					}
				}}
			>
				{connected ? "Connected" : "Connect"}
			</button>
		</div>
	);
}

export default ConnectButton;