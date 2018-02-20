import React from 'react';
import Circle from './CustomCircleMarker';
import Marker from './CustomMarker';

export default class extends React.Component{
    constructor(props){
        super(props);

        if(this.props.color){
            this.state = {
                name: this.props.color.name,
                opts: this.props.color.display_opts
            }
        }
    }

    simulateClick = (e) => {
        if(e){
            e.leafletElement.openPopup();
        }
    };

    render(){
        console.log(this.props.markers);
        return (
            this.props.markers.length > 0 ?
                    <div>
                        {this.props.markers.map( (marker, i) => {
                            if(isNaN(Number(marker.location_latitude))){
                                return '';
                            }
                            let open = this.props.marker[this.props.match] === marker[this.props.match];
                            let color = this.props.fromGroup ?
                                marker[this.props.fromGroup.id] === this.props.id ? 'green' : 'blue'
                                : this.state.opts[marker[this.state.name]].color;
                            if(this.props.type === 'circle'){
                                return <Circle color={color} format={this.props.headers} info={marker} ref={open ? this.simulateClick : null} open={open}  key={i} center={{lat:Number(marker.location_latitude), lng: Number(marker.location_longitude)}}/>
                            }
                            else {
                                return <Marker format={this.props.headers} info={marker} ref={open ? this.simulateClick : null} open={open}  key={i} position={{lat:Number(marker.location_latitude), lng: Number(marker.location_longitude)}}/>
                            }
                        })
                        }
                    </div>
                :

                ''
        );
    }
}