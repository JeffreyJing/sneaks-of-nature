import { ethers } from 'ethers';
import keccak256 from 'keccak256';
import { MerkleTree } from 'merkletreejs';
import { TOKEN_HOLDERS } from '../constants';

function hashToken(account) {
	return Buffer.from(
		ethers.utils.solidityKeccak256(
			['address'],
			[account]
		).slice(2),
		'hex'
	);
}

function generateMerkleTree() {
	const merkleTree = new MerkleTree(
		TOKEN_HOLDERS.map(hashToken),
		keccak256,
		{ sortPairs: true }
	);
	return merkleTree;
}

export function generateMerkleProof(address) {
	const addressInTokens = isUserWhitelisted(address);
	if (!addressInTokens) {
		throw new Error('User not in whitelist');
	}

	const merkleTree = generateMerkleTree();
	console.log("ROOT", merkleTree.getHexRoot());
	const proof = merkleTree.getHexProof(hashToken(address));
	return proof;
}

export function isUserWhitelisted(address) {
	const addressInTokens = TOKEN_HOLDERS.find((tokenAddress) => {
		if (tokenAddress !== undefined && address !== undefined) {
			return tokenAddress.toLowerCase() === address.toLowerCase()
		}
		return false;
	});
	return !!addressInTokens;
}