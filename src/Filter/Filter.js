import React from  'react';
import {createArray, indexOfValue} from '../Helpers'

export default class Filter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: this.props.type === 'search' ? '' : "All",
            opts: this.props.opts ? createArray(this.props.opts) : '',
            number: 0
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
        /*const name = this.props.name;
        const value = e.target.value;
        if(this.state.value === value){
            this.setState({
                value: ''
            })
            this.props.pullData('', this.props.myKey);
        }
        else {
            this.setState({
                value: value
            })
            this.props.pullData({name, value}, this.props.myKey)
        }*/
        let val = e.target.id;
        let newArr = createArray(this.props.opts);
        newArr.unshift({key: null, value: "All"});
        let position = (indexOfValue(newArr, val) + 1) % newArr.length;
        let name = this.props.name;
        let value = newArr[position].value;
        this.setState({
            value: value,
            number: newArr[position].key
        })
        if(newArr[position].key === null) {
            this.props.pullData({}, this.props.myKey);
        }
        else{
            this.props.pullData({name, value: newArr[position].key}, this.props.myKey);
        }

    }

    render(){
        let display = this.props.display ? this.props.display[this.state.number] ? this.props.display[this.state.number] : {class: '', color: 'yellow'} : '';
        return (
            this.props.type === "toggle" ?

                <div className="toggle">
                    <label>{this.props.label}</label>
                    <br/>
                    <i style={{backgroundColor: display.color}} className={`fa fa-${display.class}`} id={this.state.value} onClick={this.handleToggle}>
                        {this.state.value}
                    </i>
                </div>

                :

                <div className="SearchBar">
                    <label>{this.props.label}</label>
                    <input style={{width: "100%"}} type="text" value={this.state.value} onChange={this.onSearchChange}/>
                </div>


        )
    }
}