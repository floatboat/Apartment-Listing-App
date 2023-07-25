import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//     container: {
//       marginTop: theme.spacing(2),
//     },
//     paper: {
//       padding: theme.spacing(2),
//       color: theme.palette.text.secondary,
//     },
//   }));

//   export default function ApartmentList() {
//     const Apartment = useStyles();
//   }

export default function List({ loading, error, array }) {

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="main-container">
            {
            array.map(item => {
            return (
                <div className="container" key={item.id}>
                    <div className="image-container">
                    <img src={item.image} alt="apartment" className="image"></img>
                        <div className="price-box">
                        <p className="text-space">{item.price} €</p>
                        </div>
                    </div>
                    <div className="text-box">
                        <h3 className="text-space">{item.title}</h3>
                    </div>
                    <div className="info-box">
                        <div className="icon-box">
                            <img src="./images/check.png" alt="check"></img>
                            {item.sqm} m2
                        </div>
                        <div className="icon-box">
                            <img src="./images/bedroom.png" alt="bedroom"></img>
                            {item.bedrooms}
                        </div>
                        <div className="icon-box">
                            <img src="./images/bathroom.png" alt="bathroom"></img>
                            {item.bathrooms}
                        </div>
                    </div>
                </div>
            )
        })
            }
        </div>
    )
}
