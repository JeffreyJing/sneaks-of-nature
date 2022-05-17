import React, { useState, useEffect } from 'react';
import AnimateHeight from 'react-animate-height';
import './index.css';
import { INSTAGRAM_URL, TWITTER_URL, PRINTS_URL } from '../../constants';
import { DiscordLogo, InstagramLogo, TwitterLogo } from '../../assets/icons/logos';

const Navbar = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const [navOpen] = useState(false);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	// TODO: Link these to things
	// TODO: Update styles for these
	const navigationItems = (
		<>
			<a href={PRINTS_URL} target="_blank" rel="noopener noreferrer">PRINT NFTS</a>
			<a href={'Https://www.metarelics.xyz'} target="_blank" rel="noopener noreferrer">RELICS PASS</a>
		</>
	);

	return (
		<>
			<div className='navbar-container'>
				<div className='navbar-navigation'>
					{/* {width >= 1000 && navigationItems}
					{width < 1000 && (
						<div
							className='navbar-hamburger'
							role='button'
							onClick={() => {
								setNavOpen(!navOpen);
							}}
						>
							<Hamburger />
						</div>
					)} */}
				</div>
				<div className='navbar-emblem'>
					METARELICS
				</div>
				<div className='navbar-items'>
					<a href={TWITTER_URL} target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>
					<a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><InstagramLogo /></a>
					<DiscordLogo />
				</div>
			</div>
			<AnimateHeight duration={500} height={(width < 1000 && navOpen) ? 'auto': 0}>
				<div className='navbar-mobile-navigation'>
					{navigationItems}
				</div>
			</AnimateHeight>
		</>
	);
}

export default Navbar;