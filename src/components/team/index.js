import React from 'react';
import { OpenseaLogo, TwitterLogo } from '../../assets/icons/logos';
import './index.css';

const TEAM_MEMBERS = [{
    name: 'Jeff Cole',
    description: "Digital artist and Co-Founder of Ikonick. Born in the Michael Jordan era of Chicago, Cole developed an early love for diverse cultural genres emblematic of childhood nostalgia. Cole’s art features masterful mashups of your favorite cultural icons. His consistent output of unique content has attracted attention from the biggest brands in the world, and garnered a cult-like following on Instagram.",
    twitter: 'https://twitter.com/jeffcoleart',
    instagram: 'https://www.instagram.com/cole/'
}, {
    name: 'IKONICK',
    description: "The Metarelics team is powered by Ikonick, The fastest growing art brand in the world. Ikonick was founded by Jeff Cole & Mark Brazil in 2016. They are a west-coast based art brand putting a new spin on the business of inspiring others. Their exclusive collections are in over 150,000 homes around the world. Ikonick is backed by entrepreneurial giant, Gary Vaynerchuk.",
    twitter: 'https://twitter.com/TeamIKONICK',
    opensea: 'https://www.instagram.com/ikonick/'
}]

export const Team = () => {

    return (
        <div className='team-container'>
            <h2>THE TEAM</h2>
            <div className='team-members'>
                {TEAM_MEMBERS.map(({ name, image, description, twitter, opensea }) => (
                    <div className='team-member' key={name}>
                        
                        <p>
                            <div className="box">
                                <h1>{name}</h1>
                                {description}
                            </div>
                        </p>
                        <div className='team-socials'>
                            {twitter && (<a href={twitter} target="_blank" rel="noopener noreferrer"><TwitterLogo /></a>)}
                            {opensea && (<a href={opensea} target="_blank" rel="noopener noreferrer"><OpenseaLogo /></a>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}