import React from "react";

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <SearchOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Search Goods' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <RoomOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Map Listings' />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ShoppingBasketOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary='Offer Goods' />
        </ListItem>
        <NavLink to='/messages'>
            <ListItem button>
                <ListItemIcon>
                    <MessageOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary='Messages' />
            </ListItem>
        </NavLink>
    </div>
);
