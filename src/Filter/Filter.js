import React from  'react';

export default class Filter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    onSearchChange = e => {
        this.props.pullData(e.target.value);
        this.setState({
            value: e.target.value
        })
    }

    render(){
        return (
            this.props.type === "toggle" ?

                <div>Toggle</div>

                :

                <div className="SearchBar">
                    <label>{this.props.label}</label>
                    <input type="text" value={this.state.value} onChange={this.onSearchChange}/>
                </div>


        )
    }
}