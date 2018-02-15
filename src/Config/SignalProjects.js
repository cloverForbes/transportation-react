export default  {
    url: "https://data.austintexas.gov/resource/xwqn-2f78.json",
    id_match: "signal_id",
    color: '2',
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
            opts: {'CONSTRUCTION': 'Construction', 'DESIGN': 'Design', 'TURNED_ON': 'Turned On', 'REMOVED_PERMANENTLY': 'Removed', "RECOMMENDED - NO FUNDING": 'rec', 'REMOVED_TEMPORARILY': 'rem', 'VOID': 'void', 'UKNOWN': 'UK'},
            display: 'icon',
            filter: 'toggle',
            display_opts: {'CONSTRUCTION': {class: 'wrench', color: '#ED9F1C'}, 'DESIGN': {class: 'pencil', color: '#1B7756'}, 'TURNED_ON': {class: 'car', color: '#028102'}, 'REMOVED_PERMANENTLY': {class:'', color: 'red'}, 'RECOMMENDED - NO FUNDING': {class: '', color: 'orange'}, 'REMOVED_TEMPORARILY': {class: '', color: ''}, 'VOID': {class: '', color: ''}, 'UKNOWN': {class: '', color: ''}},
        },
        {
            alt: 'Updated',
            name: 'modified_date',
        }
    ]
}