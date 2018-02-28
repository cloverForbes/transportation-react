import React from 'react';
import {Link} from 'react-router-dom';
import {rename} from '../Helpers';
import {Grid,Row, Col} from 'react-bootstrap';
import './Header.css';

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
            <Grid fluid={true}>
                <Row>
                    <Col sm={11}>
                        <h2>{this.props.title ? rename(this.props.title) : 'Home'}</h2>
                        {this.props.title && <Link to="/"><p>Transportation Data and Performance Hub</p></Link>}
                    </Col>
                    <Col sm={1} md={1} lg={1} mdPush={5}>
                        {this.props.title && <i onClick={this.showMenu} className="box-shadow-menu"/>}
                    </Col>
                </Row>
                <Row style={{textAlign: 'center'}}>
                    <Col md={12}  mdOffset={6}>
                        <ul style={{display: this.state.menuVisible ? '' : 'none'}}>
                            {this.props.pages.map((page, index ) => {
                                return (
                                    <div onClick={this.showMenu} key={index}>
                                        <Link to={page.link}>{page.name}</Link>
                                    </div>
                                )
                            })}
                        </ul>
                    </Col>
                </Row>
            </Grid>

        )
    }
}