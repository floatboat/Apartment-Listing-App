import React, { useState } from 'react'
import MapContainer from './MapContainer';
import InputDetails from './InputDetails';

export default function AddItem() {

  const [showMap, setShowMap] = useState(true);
  const [location, setLocation] = useState({})

  const getLocation = coords => {
    console.log(coords);
    setLocation(coords);
    setShowMap(false);
  };

  const apartment = {title: '',
  price: 0,
  sqm: 0,
  bathrooms: 0,
  bedrooms: 0,
  image: '',
  lat: location.lat,
  lng: location.ln};
  return (
    <div>
      <h2>Add</h2>
        {
          showMap ?
          <MapContainer isAdding getLocation={getLocation} /> :
          <InputDetails location={location} apartment={apartment} />
        }
    </div>
  )
}
