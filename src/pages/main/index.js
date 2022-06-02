import React, { useState, useEffect } from 'react';
import { Caution, CleansingTank, CryoChamber, DayHabitat, DiscordLogo, InstagramLogo, NightHabitat, OpenseaLogo, SanitationBox, SneaksLogo, SneaksSmaller, TwitterLogo, ZeroG } from '../../assets/icons/logos';
import './index.css';

import rollie from '../../assets/_raw/characters/1-rolie-used.gif';
import chuck from '../../assets/_raw/characters/2-chuck-beater.gif';
import rob from '../../assets/_raw/characters/3-rob-tired.gif';
import cane from '../../assets/_raw/characters/4-cane-heater.gif';
import sunny from '../../assets/_raw/characters/5-sunny-heater.gif';
import barry from '../../assets/_raw/characters/6-barry-heater.gif';
import gigi from '../../assets/_raw/characters/7-gigi-meditate.gif';
import petey from '../../assets/_raw/characters/8-petey-used.gif';

import coco from '../../assets/_raw/boxes/1-coco-box-angry-eye.gif';
import bones from '../../assets/_raw/boxes/2-bones-box-normal_0426.gif';
import cocoNormal from '../../assets/_raw/boxes/3-coco-box-normal-eye.gif';
import broc from '../../assets/_raw/boxes/4-broc-box-focused-eye.gif';
import dusty from '../../assets/_raw/boxes/5-dusty-box-focus-eye.gif';
import nova from '../../assets/_raw/boxes/6-nova-box-focused-pupil.gif';
import dion from '../../assets/_raw/boxes/7-dion-box-focused-pupil.gif';
import neo from '../../assets/_raw/boxes/8-neo-box-focused-eye.gif';
import dover from '../../assets/_raw/boxes/9-dover-box-normal-pupil.gif';
import caneBox from '../../assets/_raw/boxes/10-cane-box-normal-eye.gif';
import rollieBox from '../../assets/_raw/boxes/11-rollie-box-focused-pupil.gif';
import robBox from '../../assets/_raw/boxes/12-rob-box-normal-eye.gif';
import doverAngry from '../../assets/_raw/boxes/13-dover-box-angry-eye.gif';
import connor from '../../assets/_raw/boxes/14-connor-box-focused-eye.gif';
import belly from '../../assets/_raw/boxes/15-belly-box-angry-eye.gif';

import aceCone from '../../assets/_raw/cones/ace.png';
import bellyCone from '../../assets/_raw/cones/belly.png';
import bobCone from '../../assets/_raw/cones/bob.png';
import bonesCone from '../../assets/_raw/cones/bones.png';
import brocCone from '../../assets/_raw/cones/broc.png';
import caneCone from '../../assets/_raw/cones/cane.png';
import chuckCone from '../../assets/_raw/cones/chuck.png';
import cocoCone from '../../assets/_raw/cones/coco.png';
import connorCone from '../../assets/_raw/cones/connor.png';
import cosmoCone from '../../assets/_raw/cones/cosmo.png';
import dionCone from '../../assets/_raw/cones/dion.png';
import doverCone from '../../assets/_raw/cones/dover.png';
import dustyCone from '../../assets/_raw/cones/dusty.png';
import gigiCone from '../../assets/_raw/cones/gigi.png';
import karlCone from '../../assets/_raw/cones/karl.png';
import kunoCone from '../../assets/_raw/cones/kuno.png';
import marshallCone from '../../assets/_raw/cones/marshall.png';
import neoCone from '../../assets/_raw/cones/neo.png';
import novaCone from '../../assets/_raw/cones/nova.png';
import peteyCone from '../../assets/_raw/cones/petey.png';
import robCone from '../../assets/_raw/cones/rob.png';
import rollieCone from '../../assets/_raw/cones/rollie.png';
import sunnyCone from '../../assets/_raw/cones/sunny.png';

import bobSneakForms from '../../assets/_raw/sneakforms/bob.png';
import caneSneakForms from '../../assets/_raw/sneakforms/cane.png';
import chuckSneakForms from '../../assets/_raw/sneakforms/chuck.png';
import gigiSneakForms from '../../assets/_raw/sneakforms/gigi.png';
import peteySneakForms from '../../assets/_raw/sneakforms/petey.png';
import robSneakForms from '../../assets/_raw/sneakforms/rob.png';
import rollieSneakForms from '../../assets/_raw/sneakforms/rollie.png';
import sunnySneakForms from '../../assets/_raw/sneakforms/sunny.png';


import { DISCORD_URL, INSTAGRAM_URL, OPENSEA_URL, TWITTER_URL } from '../../constants';

const SUBJECTS = [
    {
        name: 'Rollie',
        image: rollie,
        isHatched: true,
        cone: rollieCone,
        sneakForm: rollieSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Empathy',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 7',
            diet: 'Cherries'
        },
    },
    {
        name: 'Chuck',
        image: chuck,
        isHatched: true,
        cone: chuckCone,
        sneakForm: chuckSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Persistence',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 2',
            diet: 'Fudge'
        },
    },
    {
        name: 'Rob',
        image: rob,
        isHatched: true,
        cone: robCone,
        sneakForm: robSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Innovative',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 6',
            diet: 'N/A'
        },
    },
    {
        name: 'Cane',
        image: cane,
        isHatched: true,
        cone: caneCone,
        sneakForm: caneSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Patience',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Blueberries'
        },
    },
    {
        name: 'Sunny',
        image: sunny,
        isHatched: true,
        cone: sunnyCone,
        sneakForm: sunnySneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Optimism',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Lemon'
        },
    },
    {
        name: 'Bob',
        image: barry,
        isHatched: true,
        cone: bobCone,
        sneakForm: bobSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Mindset',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 2',
            diet: 'Chocolate Chips'
        },
    },
    {
        name: 'Gigi',
        image: gigi,
        isHatched: true,
        cone: gigiCone,
        sneakForm: gigiSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Consistency',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 6',
            diet: 'Green Apples'
        },
    },
    {
        name: 'Petey',
        image: petey,
        isHatched: true,
        cone: peteyCone,
        sneakForm: peteySneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Confidence',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 5',
            diet: 'Red Velvet'
        },
    },
    {
        name: '?',
        image: coco,
    },
    {
        name: '?',
        image: bones
    },
    {
        name: '?',
        image: cocoNormal
    },
    {
        name: '?',
        image: broc
    },
    {
        name: '?',
        image: dusty
    },
    {
        name: '?',
        image: nova
    },
    {
        name: '?',
        image: dion
    },
    {
        name: '?',
        image: neo
    },
    {
        name: '?',
        image: dover
    },
    {
        name: '?',
        image: caneBox
    },
    {
        name: '?',
        image: rollieBox
    },
    {
        name: '?',
        image: robBox
    },
    {
        name: '?',
        image: doverAngry
    },
    {
        name: '?',
        image: connor
    },
    {
        name: '?',
        image: belly
    },
];

const Main = () => {
	const [width, setWidth] = useState(window.innerWidth);
    const [isExpandedSeeMore, setIsExpandedSeeMore] = useState(false);
    const [selectedCard, setSelectedCard] = useState(undefined);

	useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

	const isMobile = width < 1000;

    const selectedCardMeta = selectedCard !== undefined ? SUBJECTS[selectedCard] : undefined;

    return (
        <>
            {selectedCard !== undefined && (
                <>
                    <div className='card-modal-container'>
                        <div className='card-modal'>
                            <div className='modal-close' onClick={() => setSelectedCard(undefined)}>Close X</div>
                            <div className='card'>
                                <div className='card-contents'>
                                    <div className='card-contents-header'>
                                        <div className='card-nickname-container'>
                                            <div className='card-nickname-label'>Nickname</div>
                                            <div className='card-nickname-name'>{selectedCardMeta.name}</div>
                                        </div>
                                        <div className='clearance card-clearance'>
                                            <div>
                                                <SneaksSmaller />
                                            </div>
                                            <div className='clearance-text card-clearance-text'>
                                                Clearance
                                            </div>
                                        </div>
                                    </div>

                                    <div className='card-forms'>
                                        <div className='card-form'>
                                            <img src={selectedCardMeta.sneakForm} />
                                            <div>
                                                Sneak Form
                                            </div>
                                        </div>
                                        <div className='card-form'>
                                            <img src={selectedCardMeta.cone} />
                                            <div>
                                                Cone Form
                                            </div>
                                        </div>
                                    </div>

                                    <div className='card-traits'>
                                        <div className='card-trait'>
                                            <div>ORIGIN:</div>
                                            <div>{selectedCardMeta.metadata.origin}</div>
                                        </div>
                                        <div className='card-trait'>
                                            <div>ORGANISM:</div>
                                            <div>{selectedCardMeta.metadata.organism}</div>
                                        </div>
                                        <div className='card-trait'>
                                            <div>STRENGTH:</div>
                                            <div>{selectedCardMeta.metadata.strength}</div>
                                        </div>
                                        <div className='card-trait'>
                                            <div>WEAKNESS:</div>
                                            <div>{selectedCardMeta.metadata.weakness}</div>
                                        </div>
                                        <div className='card-trait'>
                                            <div>POWER:</div>
                                            <div>{selectedCardMeta.metadata.power}</div>
                                        </div>
                                        <div className='card-trait'>
                                            <div>CHARGE:</div>
                                            <div>{selectedCardMeta.metadata.charge}</div>
                                        </div>
                                        <div className='card-trait'>
                                            <div>DIET:</div>
                                            <div>{selectedCardMeta.metadata.diet}</div>
                                        </div>
                                    </div>

                                    <div className='card-ability'>
                                        {selectedCardMeta.name} has the ability to ██████████████  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            <div className='main'>
                <div className='header'>
                    <div className='file-details'>
                        <p>
                            File: "Sneaks Of Nature"
                        </p>
                        <p>
                            Project Info: Unknown anomaly recorded
                        </p>
                        <p>
                            The following information is ground recon by
                        </p>
                        <p>
                            ██████████████████████████{!isMobile && '████████████████'}
                        </p>
                    </div>
                    <div className='clearance'>
                        <div>
                            <SneaksSmaller />
                        </div>
                        <div className='clearance-text'>
                            Clearance
                        </div>
                    </div>
                </div>

                <div className='project-updates'>
                    <div className='project-updates-header'>
                        <div><h2>PROJECT UPDATES</h2></div>
                        <div>May 4th, 2022</div>
                    </div>
                    <div className='project-updates-container container-wrapper'>
                        <p>NOTES:</p>
                        <p>&nbsp;</p>
                        <p>* Initial talks of licensing the subjects as characters called "Sneaks"</p>
                        <p>* Sneaks Holders will share upside in the Intellectual Property</p>
                        <p>* Relic Pass Holders will receive 1 for free Sneak</p>

                        {isExpandedSeeMore && (
                            <>
                                {/* <p>Test test</p> */}
                            </>
                        )}
                    </div>
                </div>

                <div className='see-more'>
                    <button onClick={() => setIsExpandedSeeMore(!isExpandedSeeMore)}>SEE MORE</button>
                </div>

                <div className='subjects'>
                    <div className='subject-header'>
                        Subject Nicknames:
                    </div>
                    <div className='subject-container container-wrapper'>
                        <div className='subject-items'>
                            {SUBJECTS.map((subject, i) => (
                                <div className={`subject-item ${subject.cone && 'subject-hascone'}`} key={`${subject.name}${i}`} onClick={() => {
                                    if (subject.cone !== undefined) {
                                        setSelectedCard(i);
                                    }
                                }}>
                                    <div className={`subject-character ${!subject.isHatched && 'subject-character-egg'}`}>
                                        <img src={subject.image} alt={subject.name} />
                                    </div>
                                    <div className='subject-name'>
                                        {subject.name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='details'>
                    {isMobile && <>
                        <div className='details-1'>
                            <div>ORIGIN: Unknown</div>
                            <div>ORGANISM: Anamorphic</div>
                        </div>
                        <div className='details-2'>
                            <div>WEAKNESS: Heat</div>
                            <div>POWER: Telepathy</div>
                        </div>
                    </>}
                    {!isMobile && <>
                        <div>ORIGIN: Unknown</div>
                        <div>ORGANISM: Anamorphic</div>
                        <div>WEAKNESS: Heat</div>
                        <div>POWER: Telepathy</div>
                    </>}
                </div>

                <div className='subject-notes container-wrapper'>
                    <p>NOTES:</p>
                    <p>&nbsp;</p>
                    <p>* Subjects have the ability to camouflage and change form in cold temperatures</p>
                    <p>* Subjects showing advanced levels of transcendental consciousness</p>
                    <p>* Subjects experience different stages of hibernation</p>
                </div>

                <div className='bottom-content'>
                    <div className='confidential-material'>
                        <div><Caution /></div>
                        <div>
                            <p>* CONFIDENTIAL MATERIAL *</p>
                            <p>PROPERTY OF █████</p>
                        </div>
                    </div>
                    <div className='mission-with-icons'>
                        <div className='mission'>
                            Mission: Capture subjects and relocate to testing containments located at ███████████████████████████{!isMobile && '█████████████'}
                        </div>
                        <div className='icon-box container-wrapper'>
                            <div>
                                <CryoChamber />
                            </div>
                            <div>
                                <CleansingTank />
                            </div>
                            <div>
                                <SanitationBox />
                            </div>
                            <div>
                                <DayHabitat />
                            </div>
                            <div>
                                <NightHabitat />
                            </div>
                            <div>
                                <ZeroG />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <div>
                        <a href={DISCORD_URL}>
                            <DiscordLogo />
                        </a>
                    </div>
                    <div>
                        <a href={TWITTER_URL}>
                            <TwitterLogo />
                        </a>
                    </div>
                    <div>
                        <a href={INSTAGRAM_URL}>
                            <InstagramLogo />
                        </a>
                    </div>
                    <div>
                        <a href={OPENSEA_URL}>
                            <OpenseaLogo />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;