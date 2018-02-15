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
export default class App extends React.Component{
    render(){
        return (
            <Router>
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
                    </ul>
                    <Switch>
                        <Route path='/signal-flashing' component={signalFlash}/>
                        <Route path='/signal-requests' component={signalRequest}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const signalFlash = () => (
    <MapsApp config={SignalFlashing}/>
);

const signalRequest = () => (
    <MapsApp config={SignalRequest}/>
);