import React from 'react';

export default function AddressItem() {

    return (
        <div className="row form-group justify-content-start">
            <label className="col-sm-4 col-form-label">{props.label}</label>
            <div className="col-xl-8">
                <input
                    type="text"
                    defaultValue={props.value}
                    onChange={props.onChange}
                    className="form-control"
                    placeholder={props.placeholder} />
            </div>
        </div>
    );
}
