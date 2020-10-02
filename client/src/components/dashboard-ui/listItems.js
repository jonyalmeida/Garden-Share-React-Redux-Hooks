import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RoomOutlinedIcon from '@material-ui/icons/Room';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MessageOutlinedIcon from '@material-ui/icons/Message';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasket';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <SearchOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Search Goods" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <RoomOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Map Listings" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingBasketOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Offer Goods" />
        </ListItem>
        <NavLink to='/messages' >
            <ListItem button>
                <ListItemIcon>
                    <MessageOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
            </ListItem>
        </NavLink>
    </div>
);
