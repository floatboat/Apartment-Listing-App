import React, { useState } from 'react'
import MapContainer from './MapContainer';
import InputDetails from './InputDetails';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { getApartmentQuery } from '../queries/query';

export default function UpdateItem() {
  const { id } = useParams();
  const [location, setLocation] = useState({})
  const { loading, error, data } = useQuery(getApartmentQuery, {
    variables: { id: id },
  });
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  console.log('ID from URL:', id);

  return (
    <div>
      <h2>Edit</h2>
        {
          <InputDetails location={location} apartment={data.apartment}/>
        }
    </div>
  )
}
