import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {Marker} from 'react-leaflet'
import PopupFrame from './PopupFrame'

export default class CustomMarker extends Marker{
    componentWillMount(){
        super.componentWillMount();
    }

    render(){
        this.leafletElement.bindPopup(ReactDOMServer.renderToStaticMarkup(<PopupFrame format={this.props.format} info={this.props.info}> {this.props.info.signal_id}</PopupFrame>))
        return super.render();
    }
}