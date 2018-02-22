import React from  'react';
import {createArray, indexOfValue} from '../Helpers'


/*Filter Component to be used in conjunction with Table or Map, unlike other components this one can not
* be used by itself and must have controller functions passed in as props*/

/*Props:
* myKey: key used to determine order of filtering
* pullData: function used to pull filter
* label: What is seen by the user
* name: What corresponds to the section of data that is being filtered
* type: Search or Toggle used to determine which type of filter will be rendered
* opts: What options can the filter be set to(only used for toggle filter)
*/
export default class Filter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: this.props.type === 'search' ? '' : "All",
            opts: this.props.opts ? createArray(this.props.opts) : '',
            number: 0
        }

    }

    /*Keeps track of current state for search filter and sends Data to controller*/
    onSearchChange = e => {
        this.props.pullData(e.target.value, this.props.myKey);
        this.setState({
            value: e.target.value
        })
    };

    /*Handles State Change for Toggle Filter and Sends Data to controller*/
    handleToggle = e => {
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

    };

    render(){
        let display = this.props.display ? this.props.display[this.state.number] ? this.props.display[this.state.number] : {class: '', color: 'black'} : '';
        return (
            this.props.type === "toggle" ?

                <div className="toggle">
                    <label>{this.props.label}</label>
                    <br/>
                    <i style={{backgroundColor: display.color}} className={`fa fa-${display.class} status-badge`} id={this.state.value} onClick={this.handleToggle}>
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