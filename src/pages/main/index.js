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
import belly from '../../assets/_raw/characters/belly_black_matter.gif';
import bones from '../../assets/_raw/characters/bones_heater.gif';
import broc from '../../assets/_raw/characters/broc_used.gif';
import coco from '../../assets/_raw/characters/coco_heater.gif';
import connor from '../../assets/_raw/characters/connor_used.gif';
import dion from '../../assets/_raw/characters/dion_yeti_heater.gif';
import dover from '../../assets/_raw/characters/dover_heater.gif';
import dusty from '../../assets/_raw/characters/dusty_toddler.gif';
import lancer from '../../assets/_raw/characters/lancer_beater.gif';
import marshall from '../../assets/_raw/characters/marshall_heater.gif';
import neo from '../../assets/_raw/characters/neo_used.gif';
import nova from '../../assets/_raw/characters/own_nova_beater.gif';
import cosmo from '../../assets/_raw/characters/cosmo_toddler.gif';
import kuno from '../../assets/_raw/characters/kuno-used.gif';
import karl from '../../assets/_raw/characters/karl_used.gif';

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

import aceSneakForms from '../../assets/_raw/sneakforms/ace.png';
import bobSneakForms from '../../assets/_raw/sneakforms/bob.png';
import breeSneakForms from '../../assets/_raw/sneakforms/bree.png';
import caneSneakForms from '../../assets/_raw/sneakforms/cane.png';
import cocoSneakForms from '../../assets/_raw/sneakforms/coco.png';
import novaSneakForms from '../../assets/_raw/sneakforms/nova.png';
import chuckSneakForms from '../../assets/_raw/sneakforms/chuck.png';
import gigiSneakForms from '../../assets/_raw/sneakforms/gigi.png';
import peteySneakForms from '../../assets/_raw/sneakforms/petey.png';
import robSneakForms from '../../assets/_raw/sneakforms/rob.png';
import rollieSneakForms from '../../assets/_raw/sneakforms/rollie.png';
import sunnySneakForms from '../../assets/_raw/sneakforms/sunny.png';
import connorSneakForms from '../../assets/_raw/sneakforms/connor.png';
import dionSneakForms from '../../assets/_raw/sneakforms/dion.png';
import bellySneakForms from '../../assets/_raw/sneakforms/belly.png';
import sashaSneakForms from '../../assets/_raw/sneakforms/sasha.png';
import doverSneakForms from '../../assets/_raw/sneakforms/dover.png';
import cosmoSneakForms from '../../assets/_raw/sneakforms/cosmo.png';
import dustySneakForms from '../../assets/_raw/sneakforms/dusty.png';
import bonesSneakForms from '../../assets/_raw/sneakforms/bones.png';
import kunoSneakForms from '../../assets/_raw/sneakforms/kuno.png';
import neoSneakForms from '../../assets/_raw/sneakforms/neo.png';
import karlSneakForms from '../../assets/_raw/sneakforms/karl.png';

import macro from '../../assets/_raw/pdf/macro.pdf';
import macroMobile from '../../assets/_raw/pdf/macro-mobile.pdf';


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
            diet: 'Lime'
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
        name: 'Ace',
        image: lancer,
        isHatched: true,
        cone: aceCone,
        sneakForm: aceSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Curiosity',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Strawberry'
        }
    },
    {
        name: 'Coco',
        image: coco,
        isHatched: true,
        cone: cocoCone,
        sneakForm: cocoSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Trust',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 4',
            diet: 'Marshmallows'
        }
    },
    {
        name: 'Bree',
        image: broc,
        isHatched: true,
        cone: brocCone,
        sneakForm: breeSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Imagination',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 2',
            diet: 'Mangos'
        }
    },
    {
        name: 'Nova',
        image: nova,
        isHatched: true,
        cone: novaCone,
        sneakForm: novaSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Wisdom',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 4',
            diet: 'Caramel'
        }
    },
    {
        name: 'Connor',
        image: connor,
        isHatched: true,
        cone: connorCone,
        sneakForm: connorSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Balance',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Cookies and Cream'
        }
    },
    {
        name: 'Dion',
        image: dion,
        isHatched: true,
        cone: dionCone,
        sneakForm: dionSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Integrity',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 5',
            diet: 'Frosty'
        }
    },
    {
        name: 'Belly',
        image: belly,
        isHatched: true,
        cone: bellyCone,
        sneakForm: bellySneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Adaptability',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Brownies'
        }
    },
    {
        name: 'Sasha',
        image: marshall,
        isHatched: true,
        cone: marshallCone,
        sneakForm: sashaSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Loyalty',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 1',
            diet: 'Peanut Butter'
        }
    },
    {
        name: 'Bones',
        image: bones,
        isHatched: true,
        cone: bonesCone,
        sneakForm: bonesSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Gratitude',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 2',
            diet: 'Brown Sugar Cinnamon'
        }
    },
    {
        name: 'Dusty',
        image: dusty,
        isHatched: true,
        cone: dustyCone,
        sneakForm: dustySneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Brave',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 2',
            diet: 'Oranges'
        }
    },
    {
        name: 'Dover',
        image: dover,
        isHatched: true,
        cone: doverCone,
        sneakForm: doverSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Compliant',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 1',
            diet: 'Bananas'
        }
    },
    {
        name: 'Neo',
        image: neo,
        isHatched: true,
        cone: neoCone,
        sneakForm: neoSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Focus',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Watermelon'
        }
    },
    {
        name: 'Cosmo',
        image: cosmo,
        isHatched: true,
        cone: cosmoCone,
        sneakForm: cosmoSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Transparency',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 5',
            diet: 'Grape'
        }
    },
    {
        name: 'Kuno',
        image: kuno,
        isHatched: true,
        cone: kunoCone,
        sneakForm: kunoSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Authenticity',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 3',
            diet: 'Syrup'
        }
    },
    {
        name: 'Karl',
        image: karl,
        isHatched: true,
        cone: karlCone,
        sneakForm: karlSneakForms,
        metadata: {
            origin: 'Unknown',
            organism: 'Amorphic',
            strength: 'Cautious',
            weakness: 'Heat',
            power: 'Telepathy',
            charge: 'Level 2',
            diet: 'Kiwi'
        }
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
                                            <div className='card-nickname-name'>{selectedCardMeta.name.toUpperCase()}</div>
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
                                        <div>NOTES:</div>
                                        {selectedCardMeta.name} has the ability to <span className='black-bars'>██████████████</span>
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
                            <span className='black-bars'>██████████████████████████{!isMobile && '████████████████'}</span>
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
                        <div><h2>WHAT WE KNOW</h2></div>
                        <div>Project Notes</div>
                    </div>
                    <div className='project-updates-container container-wrapper'>
                        <p>&quot;Sneaks Of Nature&quot; is a sneaker-inspired franchise created by renowned pop culture artist <a href='https://instagram.com/cole?igshid=YmMyMTA2M2Y=' target='_blank' rel='noopener noreferrer'>Jeff Cole</a>.</p>
                        <p>&nbsp;</p>
                        <p>Cole is a digital artist and Co-Founder of <a href='https://ikonick.com/' target='_blank' rel='noopener noreferrer'>Ikonick</a>. His art focuses primarily on pop culture and nostalgia while featuring masterful mashups of cultural icons. He made a major shift into sneaker culture back in 2014 when he found an opening in creating unique sneaker art. He's since attracted the attention of the biggest brands in the world. This Summer, he's evolving his recognizable style by creating a world of characters and experiences inspired by the most iconic sneakers.</p>
                        <p>&nbsp;</p>
                        <p>The Total Supply of Sneaks released will be: 3,333<br /><a href='https://www.metarelics.xyz/' target='_blank' rel='noopener noreferrer'>Relics Pass</a> holders get: 1 FREE MINT + The opportunity to mint one Sneak at a discounted price of: 0.33 ETH<br />Public Mint: TBD</p>
                        {/* <p>NOTES:</p>
                        <p>&nbsp;</p>
                        <p>* Initial talks of licensing the subjects as characters called "Sneaks"</p>
                        <p>* Sneaks Holders will share upside in the Intellectual Property</p>
                        <p>* Relic Pass Holders will receive 1 for free Sneak</p> */}

                        <div className='sneaks-more-info-download-pdf'>
                            <a href={isMobile ? macroMobile : macro} target="_blank" rel='noopener noreferrer'><button>MORE INFO</button></a>
                        </div>

                        {isExpandedSeeMore && (
                            <>
                                {/* <p>Test test</p> */}
                            </>
                        )}
                    </div>
                </div>

                <div className='see-more'>
                    {/* <button onClick={() => setIsExpandedSeeMore(!isExpandedSeeMore)}>SEE MORE</button> */}
                </div>

                <div className='subjects'>
                    <div className='subject-header'>
                        Click a Sneak to learn more
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
                            <div>ORGANISM: Anmorphic</div>
                        </div>
                        <div className='details-2'>
                            <div>WEAKNESS: Heat</div>
                            <div>POWER: Telepathy</div>
                        </div>
                    </>}
                    {!isMobile && <>
                        <div>ORIGIN: Unknown</div>
                        <div>ORGANISM: Anmorphic</div>
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
                            <p>PROPERTY OF <span className='black-bars'>█████</span></p>
                        </div>
                    </div>
                    <div className='mission-with-icons'>
                        <div className='mission'>
                            Mission: Capture subjects and relocate to testing containments located at <span className='black-bars'>███████████████████████████{!isMobile && '█████████████'}</span>
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