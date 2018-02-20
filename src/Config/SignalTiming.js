export default {
    url: 'https://data.austintexas.gov/resource/g8w2-8uap.json?$query=SELECT * WHERE retime_status="COMPLETED" OR retime_status="PLANNED" OR retime_status="READY FOR DATA COLLECTION"', /*?$query=SELECT * WHERE retime_status="COMPLETED"*/
    id_match: "system_id",
    fiscal: 'scheduled_fy',
    marker_type: 'circle',
    color: 2,
    fromGroup: {
        url: 'https://data.austintexas.gov/resource/efct-8fs9',
        id: 'system_id',
    },
    headers: [
        {
            alt: 'Corridor Name',
            name: 'system_name',
            filter: 'search'
        },
        {
            alt: 'Number of Signals',
            name: 'signal_count',
        },
        {
            alt: 'Status',
            name: 'retime_status',
            opts: {'COMPLETED': 'Completed', 'PLANNED': 'Planned', 'IN PROGRESS': 'In Progress', 'READY FOR DATA COLLECTION': 'In Progress'},
            display_opts: {'COMPLETED': {color: 'green', class: ''}, 'PLANNED': {color: 'purple', class: ''}, 'READY FOR DATA COLLECTION': {color: 'red', class: ''}}
        },
        {
            alt: 'Scheduled Year',
            name: 'scheduled_fy',
            filter: 'toggle',
            opts: {'2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020'},
            display_opts: {'2016' : {class: '', color: 'black'}, '2017' : {class: '', color: 'black'}, '2018' : {class: '', color: 'black'}, '2019' : {class: '', color: 'black'}, '2020' : {class: '', color: 'black'}}
        },
    ]
}