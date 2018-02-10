import React from  'react';
import {createArray} from '../Helpers'

export default class Filter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: '',
            opts: this.props.opts ? createArray(this.props.opts) : ''
        }

    }

    onSearchChange = e => {
        /*if(e.target.value === ''){
            this.props.pullData(' ', this.props.myKey);
        }
        else{
            this.props.pullData(e.target.value, this.props.myKey);
        }*/
        this.props.pullData(e.target.value, this.props.myKey);
        this.setState({
            value: e.target.value
        })
    }

    handleToggle = e => {
        const name = this.props.name;
        const value = e.target.value;
        this.setState({
            value: value
        })
        this.props.pullData({name, value}, this.props.myKey)
    }

    render(){
        return (
            this.props.type === "toggle" ?

                <div className="toggle">
                    <label>{this.props.label}</label>
                    {this.state.opts.map((opt, key) => {
                       return (
                           <div>
                               <input  checked={this.state.value === opt.key} onClick={this.handleToggle} key={key} value={opt.key}  type="checkbox" name={opt.value}/>{opt.value}<br/>
                           </div>
                       );
                    })}
                </div>

                :

                <div className="SearchBar">
                    {/*<label>{this.props.label}</label>*/}
                    <input style={{width: "100%"}} type="text" value={this.state.value} onChange={this.onSearchChange}/>
                </div>


        )
    }
}