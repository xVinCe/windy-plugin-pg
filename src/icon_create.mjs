const angles = {
  "N": 0,
  "NE": 45,
  "E": 90,
  "SE": 135,
  "S": 180,
  "SW": 225,
  "W": 270,
  "NW": 315,
};

// Base icon with center only
const SVG_START = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve">
<polygon points="30.364,2 69.636,2 98,30.364 98,69.636 69.636,98 30.364,98 2,69.636 2,30.364" fill="none" stroke="white" stroke-width="4" />
<polygon points="39.773,25 60.227,25 75,39.773 75,60.227 60.227,75 39.773,75 25,60.227 25,39.773" fill="black" />`;

// Path for an orientation
const ORIENTATION = `<polygon points="33.2,6 66.8,6 60,23 40,23" fill="black" transform="rotate(_ANGLE_ 50 50)"/>`;

const SVG_END = `</svg>`;

const SVG_URL_PREFIX = `data:image/svg+xml;utf8,`;

export default (orientations) => {
  let icon = SVG_START;
  for (const orientation of Object.keys(orientations)) {
    if (orientations[orientation] >= 1) {
      icon += ORIENTATION.replace('_ANGLE_', angles[orientation])
    }
  }

  icon = SVG_URL_PREFIX + encodeURI(icon + SVG_END);

  return L.icon({
    iconUrl: icon,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });
}
