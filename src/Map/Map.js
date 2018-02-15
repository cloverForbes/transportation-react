import React from 'react';
import { Map, TileLayer, Popup} from 'react-leaflet';
import Marker from './CustomMarker';
import Markers from './Markers'
import Circle from './CustomCircleMarker'
import L from 'leaflet';
import mark from './electrician.svg';
import pin from './female.svg';
import './Map.css';
import logo from  '../Card/logo.svg';
import {getData} from '../Helpers'

let greenIcon = L.icon({
    iconUrl: mark,

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

let mapPin = L.icon({
    iconUrl: pin,

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

export default class Transport_Map extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            animate: true,
            defaultPin: mapPin,
            markers: this.props.markers,
            loading: true,
            latlng: this.props.center
        }
    }




    componentWillMount(){
        if(this.props.url){
            getData(this.props.url, this)
        }
        else{
            this.setState({
                loading: false
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.markers !== this.props.markers){
            this.setState({
                markers: nextProps.markers
            })
        }

    }


    render(){
        return !this.state.loading ? (
            <div style={{ textAlign: 'center'}}>
                <Map
                    /*style={{height: "575px"}}*/
                    animate={this.state.animate}
                    center={this.props.center}
                    zoom={12}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Markers marker={this.props.marker} type={this.props.marker_type} color={this.props.color} match={this.props.match} markers={this.state.markers} headers={this.props.headers}/>
                </Map>
            </div>
        )
            :
            (
                <div className="card no-border">
                    <img className="spinner" src={logo} alt="logo"/>
                </div>
            )
    }
}