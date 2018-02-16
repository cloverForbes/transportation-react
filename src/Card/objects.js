export const data = [

    {
        'id' : 'traffic_signals',
        'row_container_id' : 'panel-row-1',
        'display_name' : 'Traffic Signals',
        'icon' : 'car',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Total traffic signals maintained by the City of Austin',
        'query' : 'SELECT COUNT(signal_type) as count WHERE signal_type IN ("TRAFFIC") AND signal_status IN ("TURNED_ON") limit 9000',
        'resource_id' : 'xwqn-2f78',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'signals_update'
    },
    {
        'id' : 'phbs',
        'row_container_id' : 'panel-row-1',
        'display_name' : 'Pedestrian Beacons',
        'icon' : 'female',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Total pedestrian beacons maintained by the City of Austin',
        'query' : 'SELECT COUNT(signal_type) as count WHERE signal_type IN ("PHB") AND signal_status IN ("TURNED_ON") limit 9000',
        'resource_id' : 'xwqn-2f78',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'signals_update'
    },
    {
        'id' : 'cameras',
        'row_container_id' : 'panel-row-1',
        'display_name' : 'CCTV',
        'icon' : 'video-camera',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Total traffic cameras maintained by the City of Austin.',
        'query' : 'SELECT COUNT(camera_status) as count where upper(camera_mfg) not in ("GRIDSMART") and camera_status in ("TURNED_ON")',
        'resource_id' : 'fs3c-45ge',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'cameras_update'
    },
    {
        'id' : 'sensors',
        'row_container_id' : 'panel-row-1',
        'display_name' : 'Travel Sensors',
        'icon' : 'rss',
        'init_val' : 0,
        'format' : 'round',
        'data' : [145],
        'infoStat' : true,
        'caption' : 'Total travel sensors maintained by the City of Austin',
        'query' : 'SELECT COUNT(sensor_type) as count WHERE sensor_status in ("TURNED_ON")',
        'resource_id' : 'wakh-bdjq',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'travel_sensors_update'
    },
    {
        'id' : 'signals-on-flash',
        'row_container_id' : 'panel-row-3',
        'display_name' : 'Signals on Flash',
        'icon' : 'exclamation-triangle',
        'init_val' : 0,
        'format' : 'round',
        'data' : [0],
        'infoStat' : true,
        'caption' : "Traffic signals current flashing, as reported by the City of Austin's Advanced Traffic Management System",
        'query' : "select COUNT(signal_id) as count where operation_state='2'",
        'resource_id' : '5zpr-dehc',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'signal_status_update'
    },
    {
        'id' : 'signals-comm-issue',
        'row_container_id' : 'panel-row-3',
        'display_name' : 'Communication Outage',
        'icon' : 'phone',
        'init_val' : 0,
        'format' : 'round',
        'data' : [0],
        'infoStat' : true,
        'caption' : "Traffic signals with communication outage, as reported by the City of Austin's Advanced Traffic Management System",
        'query' : "select COUNT(signal_id) as count where operation_state='3'",
        'resource_id' : '5zpr-dehc',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'signal_status_update'
    },
    {
        'id' : 'signal-timing',
        'row_container_id' : 'panel-row-2',
        'display_name' : 'Signals Re-Timed',
        'icon' : 'clock-o',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Traffic signals retimied this fiscal year',
        'query' : 'SELECT SUM(signal_count) as count WHERE retime_status IN ("COMPLETED") and scheduled_fy in ("%fiscal_year%")',
        'year'  : true,
        'resource_id' : 'ufnm-yzxy',
        'data_transform' : function(x) {
            var obj = x[0];
            if (!Object.keys(obj).length === 0) {
                return [obj['count']];
            } else {
                return [0];
            }
        },
        'update_event' : 'signal_retiming_update',
        'data' : []
    },
    {
        'id' : 'prev_maint',
        'row_container_id' : 'panel-row-2',
        'display_name' : 'Preventative Maintenance',
        'icon' : 'medkit',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Signals that have received preventative maintenance this fiscal year.',
        'query' : 'SELECT COUNT(signal_pm_max_fiscal_year) as count WHERE signal_pm_max_fiscal_year IN ("%fiscal_year%")',
        'year'  : true,
        'resource_id' : 'xwqn-2f78',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'signals_update'
    },
    {
        'id' : 'signal_construction',
        'row_container_id' : 'panel-row-3',
        'display_name' : 'Under Construction',
        'icon' : 'wrench',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Signals that are currently being constructed',
        'query' : 'SELECT COUNT(signal_status) as count WHERE signal_status IN ("CONSTRUCTION")',
        'resource_id' : 'xwqn-2f78',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'signals_update'
    },
    {
        'id' : 'gridsmart',
        'row_container_id' : 'panel-row-1',
        'display_name' : 'Gridsmart',
        'icon' : 'crosshairs',
        'init_val' : 0,
        'format' : 'round',
        'infoStat' : true,
        'caption' : 'Gridsmart detection cameras installed',
        'query' : 'select count(detector_id) as count where upper(detector_type) in ("GRIDSMART")',
        'resource_id' : 'sqwb-zh93',
        'data_transform' : function(x) { return( [x[0]['count']] )},
        'update_event' : 'detectors_update'
    }

];
