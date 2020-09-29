import React from 'react';

export default function AddressSuggest(props) {

    return (
        <AddressItem label="Address" value={props.query} placeholder="start typing" />
    );
}
