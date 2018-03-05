import React from "react";
import ReactDOMServer from "react-dom/server";
import { Marker } from "react-leaflet";
import PopupFrame from "./PopupFrame";

/*
* CustomMarker, this is solely used to bind a Custom PopUp to Marker.
* Not used to create custom markers
*/

/*
* Props:
* format: The format of the
* info: What information should be displayed in the popup
*/

export default class CustomMarker extends Marker {
  render() {
    this.leafletElement.bindPopup(
      ReactDOMServer.renderToStaticMarkup(
        <PopupFrame format={this.props.format} info={this.props.info} />
      )
    );
    return super.render();
  }
}
