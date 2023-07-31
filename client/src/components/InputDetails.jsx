import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import { addApartmentMutation, updateApartmentMutation } from '../queries/query';
import { useHistory } from 'react-router-dom';


export default function InputDetails({ location, apartment }) {

    const history = useHistory();

    const [ addApartment, { addMutationData } ] = useMutation(addApartmentMutation);
    const [ updateApartment, { updateData } ] = useMutation(updateApartmentMutation);



      const [ state, setState ] = useState(apartment);

    console.log('State of InputDetails', state);

    const changeHandler = (evt) => {
        const value = evt.target.value;
        setState({
        ...state,
        [evt.target.name]: value
        })
      };

      console.log(state)

      const mutationType = () => {
        if (apartment.id === undefined) {
            return addApartment(
                { variables: { title: state.title, price: Number(state.price), sqm: Number(state.sqm),
                    bedrooms: Number(state.bedrooms), bathrooms: Number(state.bathrooms), image: state.image,
                    lat: state.lat, lng: state.lng }}
                );
        }
        else {
            return updateApartment(
                { variables: { id: state.id, title: state.title, price: Number(state.price), sqm: Number(state.sqm),
                    bedrooms: Number(state.bedrooms), bathrooms: Number(state.bathrooms), image: state.image,
                    lat: state.lat, lng: state.lng }}
            );
        }
      }

    return (
        <div className="filter-container">
            <h4>Description</h4>
                <input type="text" name="title" placeholder={apartment.title} onChange={(event) => changeHandler(event)}/>
            <h4>Price</h4>
                <input type="number" name="price" placeholder={apartment.price} onChange={(event) => changeHandler(event)}/>
            <h4>Square meters</h4>
                <input type="number" name="sqm" placeholder={apartment.sqm} onChange={(event) => changeHandler(event)}/>
            <h4>Number of bedrooms</h4>
                <input type="number" name="bedrooms" placeholder={apartment.bedrooms} onChange={(event) => changeHandler(event)}/>
            <h4>Number of bathrooms</h4>
                <input type="number" name="bathrooms" placeholder={apartment.bathrooms} onChange={(event) => changeHandler(event)}/>
            <h4>Image</h4>
                <input type="text" name="image" placeholder={apartment.image} onChange={(event) => changeHandler(event)}/>
                <br />
            <Button variant="contained" color="secondary" onClick={() => { mutationType();
                history.push('/'); window.location.reload(false);}} >
            Add
            </Button>
        </div>
    )
}
