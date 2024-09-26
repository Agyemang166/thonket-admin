import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Custom truck icon for the map markers
const truckIcon = new L.Icon({
  iconUrl: 'https://png.pngtree.com/png-vector/20240131/ourmid/pngtree-small-cargo-truck-png-png-image_11574572.png', // Use any truck icon image URL
  iconSize: [70, 70], // Adjust size of the icon
});

function Tracking() {
  // Example coordinates for delivery trucks in Kumasi
  const deliveryTrucks = [
    { id: 1, name: 'Truck 1', position: [6.692, -1.570] }, // Kumasi city center
    { id: 2, name: 'Truck 2', position: [6.695, -1.575] }, // Nearby location
    { id: 3, name: 'Truck 3', position: [6.685, -1.580] }, // Nearby location
    { id: 4, name: 'Truck 4', position: [6.703, -1.580] }, // Near KNUST
    { id: 5, name: 'Truck 5', position: [6.676, -1.611] }, // Asafo area
    { id: 6, name: 'Truck 6', position: [6.729, -1.586] }, // Suame area
    { id: 7, name: 'Truck 7', position: [6.680, -1.625] }, // Kejetia Market
    { id: 8, name: 'Truck 8', position: [6.687, -1.633] }, // Bantama area
    { id: 9, name: 'Truck 9', position: [6.715, -1.612] }, // Tafo area
    { id: 10, name: 'Truck 10', position: [6.682, -1.614] }, // Ahodwo area
    { id: 11, name: 'Truck 11', position: [6.677, -1.582] }, // Asafo interchange
    { id: 12, name: 'Truck 12', position: [6.700, -1.605] }, // Amakom area
    { id: 13, name: 'Truck 13', position: [6.707, -1.616] }, // Oforikrom area
    { id: 14, name: 'Truck 14', position: [6.692, -1.620] }, // Patasi
    { id: 15, name: 'Truck 15', position: [6.670, -1.589] }, // Afful Nkwanta
    { id: 16, name: 'Truck 16', position: [6.681, -1.606] }, // Adum
    { id: 17, name: 'Truck 17', position: [6.706, -1.581] }, // KNUST campus
    { id: 18, name: 'Truck 18', position: [6.694, -1.616] }, // Asokwa
    { id: 19, name: 'Truck 19', position: [6.717, -1.594] }, // Asuoyeboah
    { id: 20, name: 'Truck 20', position: [6.682, -1.601] }, // Adum railway
    { id: 21, name: 'Truck 21', position: [6.692, -1.597] }, // Old Tafo
    { id: 22, name: 'Truck 22', position: [6.681, -1.597] }, // Ahinsan
    { id: 23, name: 'Truck 23', position: [6.680, -1.590] }, // Anloga junction
    { id: 24, name: 'Truck 24', position: [6.679, -1.570] }, // Asafo area
    { id: 25, name: 'Truck 25', position: [6.668, -1.584] }, // Ayigya
    { id: 26, name: 'Truck 26', position: [6.659, -1.585] }  // Chirapatre
  ];
  

  return (
    <MapContainer 
      center={[6.692, -1.570]}  // Center the map on Kumasi, Ghana
      zoom={14} 
      style={{ height: '650px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      
      {/* Render truck markers on the map */}
      {deliveryTrucks.map(truck => (
        <Marker key={truck.id} position={truck.position} icon={truckIcon}>
          <Popup>{truck.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default Tracking;
