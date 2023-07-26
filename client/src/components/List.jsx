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

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    container: {
      marginTop: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

export default function List({ loading, error, array }) {

    const classes = useStyles();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div className="main-container">
            <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Apartments
              </Typography>
            </Box>
            <Box>
              <Link to="/add">
                <Button variant="contained" color="primary">
                  ADD
                </Button>
              </Link>
            </Box>
          </Box>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Square Meters</TableCell>
                <TableCell align="left">Bedrooms</TableCell>
                <TableCell align="left">Bathrooms</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {array.map(item => (
                <TableRow key={item.ID}>
                  <TableCell align="right">{item.id}</TableCell>
                  <TableCell align="center">
                    <Box display="flex" justifyContent="center">
                      <Avatar src={item.image} />
                    </Box>
                  </TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.title}</TableCell>
                  <TableCell align="left">{item.sqm}</TableCell>
                  <TableCell align="left">{item.bedrooms}</TableCell>
                  <TableCell align="left">{item.bathrooms}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button >Edit</Button>
                      <Button >Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
    )
}