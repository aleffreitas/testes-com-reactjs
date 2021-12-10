import React from 'react';


export function Menu(props) {
    return (

        <ul className="menu">
            {props.links.map( link => {
                return(
                    <li key={link}>
                        {link}
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;