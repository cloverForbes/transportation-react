import React, { Component } from 'react';
import Card from './Card';
import {data} from './objects';
import {Grid, Row, Col} from 'react-bootstrap';
import './App.css';

class Operations extends Component {
  constructor(props){
    super(props);

    this.state = {
      year : 2018
    }

  }

  handleClick = e => {
      e.preventDefault();
      this.setState({
          year: e.target.value
      })
  };
  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row>
          {data.map((item, index) => {
              return <Col><Card year={this.state.year} config={item} key={index}/></Col>
          })}
              <ul>
                  <li value={2016} onClick={this.handleClick}>2016</li>
                  <li value={2017} onClick={this.handleClick}>2017</li>
                  <li value={2018} onClick={this.handleClick}>2018</li>
              </ul>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Operations;
