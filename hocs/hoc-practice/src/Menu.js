import React from 'react';
import {withToggler} from './Toggle'

const Menu = ({on, toggle}) => {
    return (
        <div>
            <button onClick={toggle}>Menu</button>
            <ul className={on ? 'open' : 'closed'}>
                <li>About</li>
                <li>Home</li>
                <li>Contact</li>
            </ul>
        </div>
    );
};

export default withToggler(Menu);