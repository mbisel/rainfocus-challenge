import React from 'react';
import NavItem from './NavItem';
import '../styles/Nav.scss';
import logo from '../media/logo.png'
import summit from '../media/summit.png'
import user from '../media/user.png'


function Nav() {
    return (
        <div className="nav">
            <div className="left">
                <div className="top">
                    <a href="#section"><img src={logo}></img></a>
                    <a href="#"><img src={summit}></img></a>
                </div>

                <div className="bottom">
                    <a href="#"><img src={user}></img></a>
                </div>
            </div>
            <div className="right">
                <h1>RainFocus Summit</h1>
                <h2>Lehi, UT • December 15th</h2>
                <input className='search' placeholder="Search"></input>
                <NavItem name="Guide" activity="inactive"></NavItem>
                <NavItem name="Attendees" activity="active"></NavItem>
                <div className='submenu'>
                    <p>Attendees</p>
                    <p>Attendee types</p>
                    <p>Packages</p>
                    <p>Reg codes</p>
                    <p>Discounts</p>
                </div>
                <NavItem name="Content" activity="inactive"></NavItem>
                <NavItem name="Exhibitors" activity="inactive"></NavItem>
            </div>
        </div>

    );
};
export default Nav;