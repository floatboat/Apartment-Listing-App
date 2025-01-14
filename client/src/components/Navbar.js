import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import './styles.css'; // Import your CSS file

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
  navlink:{
    color: 'white',
    textDecoration: 'none'
  }
}));

export default function NavBar({ showMap, onShowMap, showFilter, onShowFilter }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link className={classes.navlink} to="/">
            <Typography variant="h6" className={classes.title}>
              CRUD
            </Typography>
          </Link>
        <div className="form-container">
            <div class="radio-container">
                <label>Show Map
                <input type="radio" name="mapOrList" value="true" checked={true === showMap} onChange={onShowMap} />
                <span class="rcheckmark"></span>
                </label>
                
            </div>
            <div class="radio-container">
                <label>Show List
                <input type="radio" name="mapOrList" value="false" checked={false === showMap} onChange={onShowMap} /> 
                <span class="rcheckmark"></span>
                </label>
                
            </div>
            <div class="checkbox-container">
                <label>Show Filter
                    <input type="checkbox" name="filter" value="false" checked={showFilter === true} onChange={onShowFilter}/> 
                    <span class="checkmark"></span>
                </label>
            </div>
            
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}