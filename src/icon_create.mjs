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
<polygon points="33.4,9.9 66.6,9.9 90.1,33.4 90.1,66.6 66.6,90.1 33.4,90.1 9.9,66.6 9.9,33.4" fill="#000000" />`

// Path for an orientation
const ORIENTATION = `<path d="m 29.4,0 l 4,9.6 l 33.2,0 l 4,-9.6 z" fill="#000000" id="svg_1" transform="rotate(_ANGLE_ 50 50)"/>`;

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
