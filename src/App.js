import React from 'react';
import Controller from './Controller/Controller'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'
import SignalFlashing from './Config/SignalFlashing';
import SignalRequest from './Config/SignalRequest';
import SignalProjects from './Config/SignalProjects';
import SignalTiming from './Config/SignalTiming'
import Cards from './Card/Operations'
import Card from './Card/Card'
import Header from './Header/Header';
let card = {
    'id' : 'signals-on-flash',
    'row_container_id' : 'panel-row-3',
    'display_name' : 'Signals on Flash',
    'icon' : 'exclamation-triangle',
    'init_val' : 0,
    'format' : 'round',
    'data' : [0],
    'infoStat' : true,
    'caption' : "Traffic signals current flashing, as reported by the City of Austin's Advanced Traffic Management System",
    'query' : "select COUNT(signal_id) as count where operation_state='2'",
    'resource_id' : '5zpr-dehc',
    'data_transform' : function(x) { return( [x[0]['count']] )},
    'update_event' : 'signal_status_update'
};
const pages = [
    {name: 'Signal Flashing', link: '/signal-flashing'},
    {name: 'Signal Timing', link: '/signal-timing'},
    {name: 'Signal Requests', link: '/signal-requests'},
    {name: 'Signal Projects', link: '/signal-projects'},
    {name: 'Operation Overview', link: 'operation-overview'},
    ];
export default class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path="/:title*" render={(props) => <Header title={props.match.params.title} pages={pages}/>}/>
                    <Switch>
                        <Route exact path='/' component={home}/>
                        <Route exact path='/signal-timing' component={signalTiming}/>
                        <Route exact path='/signal-flashing' component={signalFlash}/>
                        <Route exact path='/signal-requests' component={signalRequest}/>
                        <Route excat path='/signal-projects' component={signalProjects}/>
                        <Route exact path='/operation-overview' component={cards} />
                        <Redirect to='/'/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const home = () => (
    <div>
        <h2>DashBoard</h2>
        <ul>
            <li>
                <Link to='/signal-flashing'>
                    <code>Signal Flashing</code>
                </Link>
            </li>
            <li>
                <Link to='/signal-requests'>
                    <code>Signal Requests</code>
                </Link>
            </li>
            <li>
                <Link to='/signal-projects'>
                    <code>Signal Projects</code>
                </Link>
            </li>
            <li>
                <Link to='/signal-timing'>
                    <code>Signal Timing</code>
                </Link>
            </li>
            <li>
                <Link to='/operation-overview'>
                    <code>Operation Overview</code>
                </Link>
            </li>
        </ul>
    </div>
);

const signalFlash = () => (
    <div>
        <Card config={card}/>
        <Controller  config={SignalFlashing}/>
    </div>
);

const signalRequest = () => (
    <Controller config={SignalRequest}/>
);

const signalProjects = () => (
    <Controller config={SignalProjects}/>
);

const signalTiming = () => (
  <Controller config={SignalTiming}/>
);

const cards = () => (
    <Cards />
);
