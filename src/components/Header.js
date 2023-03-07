import React from 'react';
import '../styles/Header.scss';
import summit from '../media/summit.png'


function Header() {
    return (
       <div className='header'>
        <div className='title-banner'>
            <img src={summit}></img>
            <div className='title-content'>
                <h1>RainFocus Summit</h1>
                <p>December 15</p>
                <p>Lehi, Utah</p>
            </div>
            <button className='edit'>Edit event</button>
        </div>
        <div className='text-content'>
            <h2>Event setup guide</h2>
            <p>See the available list of modules below. We suggest you start with the attendee module.</p>
        </div>
       </div>

    );
};
export default Header;