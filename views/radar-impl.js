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

function show_radar(data) {
    var highest = 0,
        radarData = [],
        key,
        entry,
        i,
        radarEntry;

    // Get highest count. Our position is normalized based on this
    for (key in data) {
        entry = data[key];
        highest = Math.max(highest, entry.count);
    }

    i = 0;
    // Loop through all the entries
    for (key in data) {
        entry = data[key];      // e.g. {'language': 'C++', 'count': 800 }
        radarEntry = {
            'name': entry.language,
            'description': 'Some interesting text here.',
            'links': [ 'http://an.interesting-site.com' ],
            'position': 1 - 0.95 * entry.count / highest,
            'angle': i / (data.length),
            'quadrant': 'languages',
            'count': entry.count
        };

        radarData.push(radarEntry);
        i++;
    }

    // Render the radar
    radar('#radar',
    {
        horizons: [ 'discover', 'assess', 'learn', 'use'],
        quadrants: [ 'languages'],
        width: 600,
        height: 600,
        data: radarData
    });
}

module.exports = {showRadar: show_radar};
