import './index.css';

import art from '../../assets/images/banner.png';
import questionMark from '../../assets/images/banner.png';
import winnings from '../../assets/images/banner.png';
import sheet from '../../assets/images/banner.png';
import sneaks from '../../assets/images/banner.png';

const LIST = [{
    img: sneaks,
    text: 'Sneaks of Nature'
}, {
    img: winnings,
    text: ''
}, {
    img: art,
    text: ''
}, {
    img: sheet,
    text: ''
}, {
    img: questionMark,
    text: ''
}];

export const HomeWelcome = () => {
    return (
        <div className='home-welcome'>
            <h2>PROJECTS COMING SOON</h2>
           
            <div className='home-welcome-list'>
                {LIST.map(({ img, text }, i) => (
                    <div className='home-welcome-list-item' key={`welcome-list-${i}`}>
                        <img src={img} />
                        <p>
                            {text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}