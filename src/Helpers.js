import _ from 'lodash';


export function rename(name) {
     let names = (name.split("_"));
     names.forEach( (name,index) => {
         names[index] = capitalize(name);
     });
    return names.join(" ")
}

function capitalize(word) {
    return `${word.substring(0,1).toUpperCase()}${word.substring(1).toLowerCase()}`
}

export function dataContains(data, filter){
    if(data){
        data = data.toLowerCase();
        filter = filter.toLowerCase();
        if(data.indexOf(filter) >= 0){

        }
        return (data.indexOf(filter));
    }
}

/*Takes an array of data and an array of filters and applies each filter the the data array*/
export function filterData(data, filters, name) {
    let filteredData = [];
    if (filters.length !== 0) {
        let tmpArray = [];
        filters.forEach(filter => {
            tmpArray.push(_.filter(data, (o) => {
                if (typeof(filter) === "string") {
                    return dataContains(o[name], filter) >= 0
                }
                if (typeof(filter) === "object") {
                    return o[filter.name] === filter.value
                }
            }))
        });

        if (tmpArray.length === 2) {
            filteredData = (_.intersection(...tmpArray));
        }
        else if (tmpArray.length === 1) {

            filteredData = tmpArray[0]
        }
        else {
            for (let x = 0; x < tmpArray.length - 1; x++) {
                filteredData = (_.intersection(tmpArray[x], tmpArray[x + 1]));
            }
        }

        /*if (tmpArray.length > 1) {
            filteredData = _.filter(filteredData, (o) => {
                console.log(o);
                return dataContains(o.location_name, this.props.filter[0]) !== -1
            });
        }*/
        return filteredData;
    }
    return data
}


export function format(type, data) {
    switch(type) {
        case 'date' :
            return formatDate(data);
        default :
            return data;
    }
}

function formatDate(date) {
    let dateObj = new Date(date * 1000);
    return `${dateObj.getDate()} ${convertMonth(dateObj.getMonth())} ${dateObj.getHours()}:${dateObj.getMinutes()}`
}

function convertMonth(month) {
    let months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    };
    return (months[month])
}

export function createArray(obj){
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    let newArray = [];
    for(let x = 0; x < keys.length; x++){
        let key = keys[x];
        let value = values[x];
        newArray.push({key: key, value: value})
    }

    return newArray;
}

export function indexOfValue(arr,value){
    let index = null;
    arr.forEach((item, j) => {
        if(item.value === value){
            index = j;
        }
    })
    return index
}

export function getMarkersFromGroup(group,markersURL,id, state){
    let len = group.length;
    let dataArr = [];
    group.forEach(i => {
            let url = `${markersURL}?$query=SELECT * WHERE ${id}=${i[id]}`;
            let headers = new Headers();
            let myInit = {
                method: 'GET',
                headers: headers,
                mode: 'cors',
                cache: 'default'
            };

            if(len === 1){
                fetch(url, myInit).then(function (res) {
                    return res;
                }).then((resp) => {
                    return resp.json();
                }).then(data => {
                    dataArr.push(data);
                    if(dataArr.length === len){
                        state.setState({
                            group: group,
                            bounds: findMedianLatLng(data),
                            markers : _.flattenDeep(dataArr),
                            id: group[0][id]
                        });
                    }
                });
            } else {
                fetch(url, myInit).then(function (res) {
                    return res;
                }).then((resp) => {
                    return resp.json();
                }).then(data => {
                    dataArr.push(data);
                    if(dataArr.length === len){
                        state.setState({
                            markers : _.flattenDeep(dataArr),
                        })
                    }
                });
            }
    });

}

export function getData(url,state) {
    let headers = new Headers();
    let myInit = {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
    };

    fetch(url, myInit).then(function (res) {
        return res;
    }).then((resp) => {
        return resp.json();
    }).then(data => {
        state.setState({
            data: data
        })
    })
}

function findMedianLatLng(locationArray){
    let newArray = [];
    locationArray.forEach(i => {
        newArray.push([
            Number(i.location_latitude),
            Number(i.location_longitude)
        ])
    });
    return newArray;

}