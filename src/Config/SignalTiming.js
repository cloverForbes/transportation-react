export default {
    url: 'https://data.austintexas.gov/resource/g8w2-8uap.json?$query=SELECT * WHERE retime_status="COMPLETED"',
    id_match: "system_id",
    marker_type: 'circle',
    color: 2,
    fromGroup: {
        url: 'https://data.austintexas.gov/resource/efct-8fs9',
        id: 'system_id'
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
            opts: {'COMPLETED': 'Completed'},
            display_opts: {'COMPLETED': {color: 'green', class: ''}}
        }
    ]
}