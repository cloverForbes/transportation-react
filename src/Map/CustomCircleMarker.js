import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {CircleMarker} from 'react-leaflet'
import PopupFrame from './PopupFrame'
/*
* Custom Circle Marker Exact same as the Custom Marker Except it extends Circle Marker
*/

/*
* Props:
* format: The format of the
* info: What information should be displayed in the popup
*/
export default class CustomMarker extends CircleMarker{

    render(){
        this.leafletElement.bindPopup(ReactDOMServer.renderToStaticMarkup(
            <PopupFrame
                format={this.props.format}
                info={this.props.info}
            />
        ));
        return super.render();
    }
}