import _ from 'lodash'

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
    data = data.toLowerCase();
    filter = filter.toLowerCase();
    if(data.indexOf(filter) >= 0){

    }
    return (data.indexOf(filter));
}

/*Takes an array of data and an array of filters and applies each filter the the data array*/
export function filterData(data, filters) {
    let filteredData = [];
    if (filters.length !== 0 && !filters.includes("")) {
        let tmpArray = [];
        filters.forEach(filter => {
            tmpArray.push(_.filter(data, (o) => {
                if (typeof(filter) === "string") {
                    return dataContains(o.location_name, filter) >= 0
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

        if (tmpArray.length > 1) {
            filteredData = _.filter(filteredData, (o) => {
                return dataContains(o.location_name, this.props.filter[0]) !== -1
            });
        }
        return filteredData;
    }
    return data
}


export function getData(url) {


}