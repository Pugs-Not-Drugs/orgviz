function entry(start, end, quadrant, position, position_angle, direction, direction_angle) {
	return {
		// start date that this entry applies for
		start: start,
		// end date for the entry
		end: end,
		// the quadrant label
		quadrant: quadrant,
		// position is within the total of horizons.
		position: position,
		// angles are fractions of pi/2 (ie of a quadrant)
		position_angle: position_angle,
		// the learning end point with the total of horizons.
		direction: direction,
		// angles are fractions of pi/2 (ie of a quadrant)
		direction_angle: direction_angle
	};
}

function append_radar_quadrant(data, radar_data, quadrant_name) {
    var highest = 0,
        i = 0,
        radar_entry,
        key,
        entry;

    // Get highest count. Distance from graph centre is normalized
    // based on this
    for (key in data) {
        entry = data[key];
        highest = Math.max(highest, entry.Count);
    }

    // Loop through all the entries
    for (key in data) {
        entry = data[key];      // e.g. {'language': 'C++', 'count': 800 }
        radar_entry = {
            'name': entry.Language,
            'description': 'Some interesting text here.',
            'links': [ 'http://an.interesting-site.com' ],
            'position': 1 - 0.95 * entry.Count / highest,
            'angle': i / (data.length),
            'quadrant': quadrant_name,
            'count': entry.Count
        };

        // Add new entry to existing radar data array
        radar_data.push(radar_entry);
        i++;
    }
}

function show_radar(org_data, member_data) {
    var radar_data = [],
        key,
        entry,
        i,
        radar_entry,
        quadrant_names = ['current skills'];

    append_radar_quadrant(org_data, radar_data, 'current skills');

    if (member_data) {
        append_radar_quadrant(member_data, radar_data, 'potential');
        quadrant_names.push('potential');
    }

    // Render the radar, clearing it first
    document.getElementById('radar').innerHTML = '';

    radar('#radar',
    {
        horizons: [ 'discover', 'assess', 'learn', 'use'],
        quadrants: quadrant_names,
        width: 600,
        height: 600,
        data: radar_data
    });
}

module.exports = {showRadar: show_radar};
