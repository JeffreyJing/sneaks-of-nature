import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SneaksLogo } from '../../assets/icons/logos';
import './index.css';

const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	const isMobile = width < 1000;
	
	return (
		<>
			<div className='home'>
				<div className='sneaks-main-logo'>
					<div className='sneaks-logo-item' style={{
						// backgroundColor: 'black',
						height: isMobile ? '70vw' : '20vw',
						width: isMobile ? '70vw' : '20vw'
					}}>
						<SneaksLogo />
					</div>
				</div>
				<div className='enter-button'>
					<NavLink to='/main'><button>ENTER</button></NavLink>
				</div>
				<div className='confidential'>
					<p>* CONFIDENTIAL MATERIAL *</p>
					<p>PROPERTY OF █████</p>
				</div>
			</div>
		</>
	);
}

export default Home;