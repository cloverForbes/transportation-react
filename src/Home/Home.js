import React from 'react';
import HomeButton from './HomeButton'
export default function Home(props){
    return (
        <ul>
            {props.links.map((link, index) => {
                return (
                    <li key={index}>
                        <HomeButton link={link}/>
                    </li>
                );
            })}
        </ul>
    );
}
