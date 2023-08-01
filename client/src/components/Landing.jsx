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
  const [ showFilter, setShowFilter ] = useState(false);
  
  const { loading, error, data } = useQuery(getApartments);

  const clickHandler = () => {
    setShowLanding(!showLanding);
  };
  const onShowMap = () => {
    setShowMap(!showMap);
  };
  const onShowFilter = () => {
    setShowFilter(!showFilter);
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

  const displayFilter = () => {
    if (showFilter) {
      return ( 
      <Filter />
      )
    }
  }

  const landingPage = () => {
    
    if (showLanding && data) {
      if (showMap) {
        return (
        <div>
          { displayFilter() }
          <MapContainer array={data.apartments} loading={loading} error={error} />
        </div>
        )
      }
      else {
        return (
          <div>
            { displayFilter() }
            <List array={data.apartments} loading={loading} error={error} />
          </div>
        )
      }
      
      // return <List array={data.apartments} loading={loading} error={error} />
    } 
  }

  return (
    <div>
      <Navbar clickHandler={clickHandler} showMap={showMap} onShowMap={onShowMap} showFilter={showFilter} onShowFilter={onShowFilter} />
      { landingPage() } 
    </div>
  )
}
