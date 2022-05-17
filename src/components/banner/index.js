import React, { useState, useEffect } from 'react';
import { OpenseaLogo, OpenseaLogoDark } from '../../assets/icons/logos';
import bannerVideoMobile from '../../assets/videos/banner-mobile.mp4';
import bannerVideoDesktop from '../../assets/videos/banner-desktop.mp4';
import { OPENSEA_URL } from '../../constants';
import ConnectButton from '../connect-button';
import { MintCount } from '../mint-count';
import './index.css';
import { MintNowButton } from '../mint-button';

export const Banner = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	const bannerContent = (
		<div className='banner-content'>
			<h2>RELICS PASS</h2>
			<p>Metarelics is an artist collective led by Jeff Cole &amp; powered by the Ikonick team. The Relics Pass is your access to the Metarelics ecosystem of exclusive products and experiences.</p>
			<MintCount />
			{/* <ConnectButton /> */}
			<MintNowButton />
			<a href={OPENSEA_URL} target="_blank" rel="noopener noreferrer">
				<button className='banner-opensea' role="link">
					<OpenseaLogoDark />BUY ON OPENSEA
				</button>
			</a>
			{/* <a href={OPENSEA_URL}><OpenseaLogo /></a> */}
		</div>
	)
	
	return (
		<div className='banner-container'>
			<div className='banner-video' dangerouslySetInnerHTML={{
				__html: `
					<video autoplay loop muted playsinline>
						<source src="${width < 1000 ? bannerVideoMobile : bannerVideoDesktop}" type='video/mp4' />
					</video>
				`
			}}>
				
			</div>
			{width > 1000 && bannerContent}
			{width <= 1000 && (
				<div className='banner-content-wrapper'>
					{bannerContent}
				</div>
			)}
		</div>
	)
}