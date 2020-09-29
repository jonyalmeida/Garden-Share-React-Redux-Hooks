import React from 'react';

export default function AddressInput(props) {

    return (
        <div className="card"><div className="card-body">
            <AddressItem label="Street" value={props.street} placeholder="" readonly="true" />
            <AddressItem label="City" value={props.city} placeholder="" readonly="true" />
            <AddressItem label="State" value={props.state} placeholder="" readonly="true" />
            <AddressItem label="Postal Code" value={props.code} placeholder="" readonly="true" />
            <AddressItem label="Country" value={props.country} placeholder="" readonly="true" />
        </div></div>
    );
}
