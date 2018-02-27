export default  {
    url: "https://data.austintexas.gov/resource/xwqn-2f78.json?$query=SELECT * WHERE signal_status='CONSTRUCTION' OR signal_status='TURNED_ON' OR signal_status='DESIGN'",
    id_match: "signal_id",
    string_filter: 'location_name',
    color: '2',
    center: [30.3, -97.7],
    marker_type: 'circle',
    headers: [
        {
            alt: 'Location',
            name: 'location_name',
            filter: 'search',
        },
        {
            alt: 'Type',
            name: 'signal_type'
        },
        {
            alt: 'Status',
            name: 'signal_status',
            opts: {'CONSTRUCTION': 'Construction', 'DESIGN': 'Design', 'TURNED_ON': 'Turned On'},
            display: 'icon',
            filter: 'toggle',
            display_opts: {'CONSTRUCTION': {class: 'wrench', color: '#ED9F1C'}, 'DESIGN': {class: 'pencil', color: '#1B7756'}, 'TURNED_ON': {class: 'car', color: '#028102'}},
        },
        {
            alt: 'Updated',
            name: 'modified_date',
            format: 'date_from_stamp',
        }
    ]
}