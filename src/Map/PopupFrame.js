import React from 'react';
import {format} from '../Helpers'

export default class PopupFrame extends React.Component{

    render(){
        let signal = this.props.info;
        return(
            <div>
                Signal id | {signal.signal_id}<br/>
                {this.props.format.map((item, key) =>{
                    let name = item.alt;
                    let data = signal[item.name];
                    data = item.opts ? item.opts[data] : data;
                    data = item.format ? format(item.format, data) : data;
                    return (
                        <div key={key}>
                            {name} | {data} <br/>
                        </div>
                    );
                })}
                {this.props.children}
            </div>
        )
    }
}