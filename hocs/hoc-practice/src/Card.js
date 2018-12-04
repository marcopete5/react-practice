import React from 'react';
import {withToggler} from './Toggle'

const Card = ({toggle, on}) => {
    return (
        <div onClick={toggle} className='cardContainer'>
                <div className={on ? 'show' : 'hide'}>
                    <h1>This is a card</h1>
                </div>
        </div>
    );
};

export default withToggler(Card);