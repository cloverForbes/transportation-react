import React from 'react';
import { Map, TileLayer} from 'react-leaflet';
import Markers from './Markers'
import {getData, getMarkersFromGroup} from '../Helpers'
import logo from  '../Card/logo.svg';
import './Map.css';


export default class Transport_Map extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            animate: true,
            markers: [],
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
        if(nextProps.fromGroup){
            getMarkersFromGroup(nextProps.markers, nextProps.fromGroup.url, nextProps.fromGroup.id, this)
        }
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
                    bounds={this.props.bounds}
                    animate={this.state.animate}
                    center={this.props.center}
                    zoom={12}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Markers fromGroup={this.props.fromGroup} marker={this.props.marker} type={this.props.marker_type} color={this.props.color} match={this.props.match} markers={this.state.markers} headers={this.props.headers}/>
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