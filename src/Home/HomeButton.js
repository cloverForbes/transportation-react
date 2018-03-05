import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeButton(props){
    return (
        <Link to={props.link.link}>{props.link.name}</Link>
    );
}
