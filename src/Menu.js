import React from 'react';
import {NavLink} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    active_class:{
        backgroundColor:'red',
    }
  });

const Menu=()=>{
    const classes = useStyles();

    return (
        <>
            <NavLink exact activeClassName={classes.active_class} to="/">Home</NavLink>    
            <NavLink exact activeClassName={classes.active_class} to="/contact">Contact</NavLink>    
            <NavLink exact activeClassName={classes.active_class} to="/about">About</NavLink>    
        </>
    )   
}

export default Menu;
