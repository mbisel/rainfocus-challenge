import React from 'react';

function Card(props) {
    return (
        <div className={props.class}>
            <div className="card">
                <div className='heading'>
                    <img src={props.icon}></img>
                    <h1>{props.name}</h1>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    );
};
export default Card;