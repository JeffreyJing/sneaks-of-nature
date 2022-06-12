import { useEffect, useState, useContext } from 'react';
import { SneaksLogo } from '../../assets/icons/logos';
import { Web3Context } from '../../context/web3-context';
import './index.css';

const BurnPunks = () => {
	const [width, setWidth] = useState(window.innerWidth);
    const { connect } = useContext(Web3Context);
    
	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    return (
        <div className='burn-punks'>
            <div className='bp-header'>
                <div className='bp-logo'>
                    <SneaksLogo />
                </div>
                <div className='bp-connect'>
                    <button onClick={connect}>CONNECT WALLET</button>
                </div>
            </div>
        </div>
    );
}

export default BurnPunks;