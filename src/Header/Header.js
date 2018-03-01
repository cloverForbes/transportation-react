import React from 'react';
import {Link} from 'react-router-dom';
import {rename} from '../Helpers';
import {Grid,Row, Col, Button} from 'react-bootstrap';
import './Header.css';
import Quote from '../QuoteOfTheDay/Quote';

export default class Header extends React.Component{

    componentWillMount(){
        this.setState({menuVisible: false})
    }

    showMenu = ()=>{
        console.log('hi');
        this.setState({
            menuVisible: !this.state.menuVisible
        });
    };

    render(){
        return  (
            <div className="headerCom">
                <Grid fluid={true}>
                    <Row>
                        <Col sm={6} md={11}>
                            <h2>{this.props.title ? rename(this.props.title) : 'Home'}</h2>
                            {this.props.title && <Link to="/"><p>Transportation Data and Performance Hub</p></Link>}
                        </Col>
                        <Col sm={6} md={1}>
                            {this.props.title && <i onClick={this.showMenu} className="fa fa-bars header-menu-button"/>}
                        </Col>
                    </Row>
                    <Row style={{textAlign: 'center'}}>
                        <Col md={12}  mdOffset={6}>
                            <Quote />
                            <ul className="header-menu" style={{display: this.state.menuVisible ? '' : 'none'}} >
                                {this.props.pages.map((page, index ) => {
                                    return (
                                        <div  key={index}>
                                            <Link onClick={this.showMenu} to={page.link}>{page.name}</Link>
                                        </div>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}