let map = L.map('apMap').setView([51.23009, 4.41616], 17);
let coffee = L.icon({
    iconUrl: "./images/coffee.png",
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map); // 'L.rectangle' in plaats van 'L.coffee'

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let apMarker = L.marker([51.23009, 4.41616], {icon: coffee}).addTo(map); // 'let apMarker =' toegevoegd en de positie van de haakjes aangepast
apMarker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup(); // 'apMarker.bindPopup' in plaats van 'apMarker.bindPopup'
