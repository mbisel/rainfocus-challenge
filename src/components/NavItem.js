import React from 'react';
import '../styles/Nav.scss';

function NavItem(props) {
    return (
      <div className={props.activity}>
        <div className='dot'></div>
        {props.name}
      </div>
    );
};
export default NavItem;