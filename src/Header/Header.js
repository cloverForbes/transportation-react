import React from 'react';
import {Link} from 'react-router-dom';
import {rename} from '../Helpers';


export default class Header extends React.Component{

    componentWillMount(){
        this.setState({menuVisible: false})
    }

    showMenu = () =>{
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    };

    render(){
        return  (
            <div>
                <h2>{this.props.title ? rename(this.props.title) : 'Home'}</h2>
                {this.props.title && <div><Link to="/">Home</Link> <i onClick={this.showMenu} className="fa-wrench fa"/></div>}
                <ul style={{display: this.state.menuVisible ? '' : 'none'}}>
                    {this.props.pages.map((page, index ) => {
                        return (
                            <div key={index}>
                                <Link to={page.link}>{page.name}</Link> <br/>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}