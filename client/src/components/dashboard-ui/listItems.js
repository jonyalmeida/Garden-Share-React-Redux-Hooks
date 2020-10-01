import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import RoomOutlinedIcon from '@material-ui/icons/Room';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MessageOutlinedIcon from '@material-ui/icons/Message';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasket';
// import AssignmentIcon from '@material-ui/icons/Assignment';

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
        <ListItem button>
            <ListItemIcon>
                <MessageOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
        </ListItem>
    </div>
);

// export const secondaryListItems = (
//     <div>
//         <ListSubheader inset>Saved reports</ListSubheader>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Current month" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Last quarter" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <AssignmentIcon />
//             </ListItemIcon>
//             <ListItemText primary="Year-end sale" />
//         </ListItem>
//     </div>
// );