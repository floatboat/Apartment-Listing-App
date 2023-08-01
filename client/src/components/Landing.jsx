import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getApartments } from '../queries/query';
import List from './List';
import Filter from './Filter';
import Navbar from './Navbar';
import MapContainer from './MapContainer';

export default function Landing() {

  const [ showLanding, setShowLanding ] = useState(true);
  const [ showMap, setShowMap ] = useState(false);
  
  const { loading, error, data } = useQuery(getApartments);

  const clickHandler = () => {
    setShowLanding(!showLanding);
  };
  const onShowMap = () => {
    setShowMap(!showMap);
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;

    if (value === 'showLanding') {
      setShowLanding();
      setShowMap();
    } else if (value === 'showMap') {
      setShowLanding();
      setShowMap();
    }
  };

  const landingPage = () => {
    
    if (showLanding && data) {
      if (showMap) {
        return <MapContainer array={data.apartments} loading={loading} error={error} />
      }
      return <List array={data.apartments} loading={loading} error={error} />
    } else {
      return <Filter showLanding={showLanding} showMap={showMap} />
    }
  }

  return (
    <div>
      <Navbar clickHandler={clickHandler} showMap={showMap} onShowMap={onShowMap} />
      { landingPage() } 
    </div>
  )
}
