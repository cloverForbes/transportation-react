import React from 'react';
import {Link} from 'react-router-dom';
import './home.css'

export default function HomeButton(props){
    return (
        <Link className="col-md home-button" to={props.link.link}>
            <h3>{props.link.name}</h3>
        </Link>
    );
}
