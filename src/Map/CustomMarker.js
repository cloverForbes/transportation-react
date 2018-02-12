import React from 'react';
import {Marker} from 'react-leaflet'

export default class CustomMarker extends Marker{
    componentWillMount(){
        super.componentWillMount();
        console.log(this.props.info);
        this.leafletElement.bindPopup(
            `<div>${this.props.info.location_name}<br/>${this.props.info.operation_state}</div>`);
    }


}