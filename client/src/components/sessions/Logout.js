import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../store/auth';

export default function LogoutUser() {

    const dispatch = useDispatch();
    dispatch(logout());


    //this.setState({ loggedOut: true }
    return (
        <Redirect to='/enter' />
    );
}




