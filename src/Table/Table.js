import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {rename, filterData, format} from '../Helpers'

export default  class Table extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.url ? [] : this.props.data,
            filteredData: [],
            filter: ''
        }
    }

    componentWillMount(){
        if(this.props.url){
            let headers = new Headers();
            let myInit = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            };

            fetch(this.props.url, myInit).then(function (res) {
                return res;
            }).then((resp) => {
                return resp.json();
            }).then(data => {
                this.setState({
                    data: data
                })
            })
        }
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.filter !== this.state.filter){
          let filteredData = (filterData(this.state.data, nextProps.filter));
          this.setState({
              filteredData: filteredData
          })
        }

    }


    render(){
        let columns = this.props.headers.map((header) => {
            return {
                Header: header.alt,
                accessor: header.name,
                Cell: (header.opts || header.format) ? row => (
                   !header.format ?
                       <span>
                           {header.opts[row.value]}
                       </span>
                       :
                       (header.format && header.opts) ?
                           <span>
                               {format(header.format, header.opts[row.value])}
                           </span>
                           :
                           <span>
                               {format(header.format, row.value)}
                           </span>
                ): null
            }
        });

        return (
            <ReactTable style={{height: '400px'}} showPagination={false} minRows={0} defaultPageSize={1000}
                columns={columns}
                data={this.props.data ? this.props.data : this.props.filter.length > 0 ? this.state.filteredData : this.state.data }
                getTdProps={(state, rowInfo) => {
                    return {
                        onClick: (e, handleOriginal) => {
                            if(rowInfo) {
                                let latitude = rowInfo.original.location_latitude;
                                let longitude = rowInfo.original.location_longitude;
                                this.props.getPosition(rowInfo.original);
                                if (handleOriginal) {
                                    handleOriginal()
                                }
                            }
                        }
                    }
                }}
            />
        );

    }

}