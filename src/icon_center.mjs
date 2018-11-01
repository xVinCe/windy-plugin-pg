const MARKER = encodeURI(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 480 480" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
<polygon cx="240.25" cy="240.25" edge="115.088613" fill="#000000" id="svg_8" orient="x" points="390.6205196894497,240.25 346.5780141629551,346.5780141629551 240.25,390.6205196894497 133.92198583704487,346.5780141629551 89.87948031055032,240.25000000000003 133.92198583704484,133.92198583704487 240.24999999999997,89.87948031055032 346.5780141629551,133.92198583704484 390.6205196894497,240.24999999999997 " shape="regularPoly" sides="8" stroke="#000000" stroke-width="0" strokeWidth="null" strokecolor="#000000" transform="rotate(22.5 240.25 240.25)"/>
</svg>`);

const MARKER_ICON_URL = `data:image/svg+xml;utf8,${MARKER}`;

const Icon = L.icon({
  iconUrl: MARKER_ICON_URL,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
});

export default Icon
