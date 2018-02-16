import React from 'react';
import MapsApp from './Map/MapsApp'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import SignalFlashing from './Config/SignalFlashing';
import SignalRequest from './Config/SignalRequest';
import SignalProjects from './Config/SignalProjects';
import SignalTiming from './Config/SignalTiming'
import Cards from './Card/Operations'
import Card from './Card/Card'
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
}
export default class App extends React.Component{
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path='/' component={home}/>
                        <Route exact path='/signal-timing' component={signalTiming}/>
                        <Route path='/signal-flashing' component={signalFlash}/>
                        <Route path='/signal-requests' component={signalRequest}/>
                        <Route path='/signal-projects' component={signalProjects}/>
                        <Route path='/operation-overview' component={cards} />
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
        <MapsApp config={SignalFlashing}/>
    </div>
);

const signalRequest = () => (
    <MapsApp config={SignalRequest}/>
);

const signalProjects = () => (
    <MapsApp config={SignalProjects}/>
);

const signalTiming = () => (
  <MapsApp config={SignalTiming}/>
);

const cards = () => (
    <Cards />
);
