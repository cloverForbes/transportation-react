export default {
    url: "https://data.austintexas.gov/resource/f6qu-b7zb.json",
    id_match: "atd_eval_id",
    marker_type: "circle",
    headers: [
        {
            name: 'location_name',
            filter: 'search',
            alt: 'Location',
        },
        {
            name: 'eval_type',
            filter: 'toggle',
            opts: {'TRAFFIC': 'Traffic', "PHB": "PHB"},
            alt: 'Type',
            display: 'icon',
            display_opts: {'TRAFFIC' :{class: "car", color: "#1A79A5"}, "PHB": {class: "female", color: "#A65628"}}
        },
        {
            name: 'request_status',
            alt: 'Status'
        }
    ]
}