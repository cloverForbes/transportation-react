export default {
  url: "https://data.austintexas.gov/resource/5zpr-dehc.json",
  string_filter: 'location_name' ,
  id_match: 'signal_id',
  color: '1',
  center: [30.3, -97.7],
  marker_type: 'marker',
  headers : [
    {
      name: "location_name",
      filter: "search",
      alt: "Location"

    },
    {
      name: "operation_state",
      opts: {'1': 'Scheduled Flash','2': 'Flash', '3': 'Comms Outage', '4': 'Unknown'},
      display: 'icon',
      display_opts: {'1': {class: 'clock', color: '#1B495C'}, '2': {class: 'exclamation-triangle', color: 'red'}, '3': {class: 'phone', color: '#F1AC37'}, '4' : {class: '', color: 'blue'}},
      filter: "toggle",
      alt: "Status"
    },
    {
      name: "operation_state_datetime",
      format: "date",
      alt: "Status Date"
    },
    {
      name: "todo: math",
      format: "timeH"
    }
  ],
};
