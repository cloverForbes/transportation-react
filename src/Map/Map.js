import React from 'react';
import { Map, Marker, TileLayer, Popup } from 'react-leaflet'
import L from 'leaflet';
import mark from './electrician.svg'
import pin from './female.svg'
import './Map.css'
import logo from  '../Card/logo.svg'

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
            loading: true
        }
    }

    handleMarkerClick = e => {
            this.setState({
                latlng: e.latlng,
            })
    };


    componentWillMount(){
        if(this.props.url){
            let headers = new Headers();
            let myInit = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            };

            fetch(this.props.url, myInit).then(function (res) {
                return res;
            }).then((resp) => {
                return resp.json();
            }).then(data => {
                this.setState({
                    markers: data,
                    loading: false
                })
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
        console.log(this.state.markers)
        return !this.state.loading ? (
            <div style={{ textAlign: 'center'}}>
                <Map
                    style={{height: "575px"}}
                    animate={this.state.animate}
                    center={this.props.latlng}

                    zoom={12}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.state.markers.map( (marker, i) => {
                        return (
                        <Marker onClick={this.handleMarkerClick} key={i} position={{lat: marker.location_latitude , lng: marker.location_longitude}}>
                            <Popup>
                                <span>
                                    {marker.info}
                                </span>
                            </Popup>
                        </Marker>
                        );
                    })}
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