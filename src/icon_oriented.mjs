const MARKER = encodeURI(`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="100%" height="100%" viewBox="0 0 480 480" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
<path d="m159.999973,88.949993l29.981052,-88.95l99.936845,0l29.981041,88.95l-159.898938,0z" fill="#000000" id="svg_1" stroke="#000000" stroke-width="0" transform="rotate(180 239.949 44.475)"/>
</svg>`);

const MARKER_ICON_URL = `data:image/svg+xml;utf8,${MARKER}`;

const Icon = L.icon({
  iconUrl: MARKER_ICON_URL,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, 0],
});

export default Icon
