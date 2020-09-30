import React from 'react';

export default function OfferGoodsForm() {


    return (
        <div>
            <form onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <div
                    style={{ display: 'flex', flexDirection: 'row', }}
                ><TextField
                        style={{ display: 'flex', flexShrink: '0' }}
                        variant='filled'
                        label='First Name'
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <TextField
                        style={{ display: 'flex', flexGrow: '2' }}
                        variant='filled'
                        label='Last Name'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div
                    style={{ display: 'flex', flexDirection: 'row', }}
                >
                    <TextField
                        style={{ display: 'flex', flexGrow: '2' }}
                        variant='filled'
                        label='E-mail'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <TextField
                        style={{ display: 'flex', flexShrink: '0' }}
                        variant='filled'
                        label='Password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <h1
                    style={{ textAlign: 'center' }}
                >
                    Address
                </h1>
                <TextField
                    id='autocomplete'
                    variant='filled'
                    label='Full Address'
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)} />
                <TextField
                    variant='filled'
                    label='Street Address'
                    type='text'
                    value={streetAddress}
                    onChange={(e) => setStreetAddress(e.target.value)}
                />
                <div
                    style={{ display: 'flex', flexDirection: 'row', }}
                >
                    <TextField
                        style={{ display: 'flex', flexGrow: '3' }}
                        variant='filled'
                        label='City'
                        type='text'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <TextField
                        style={{ display: 'flex', flexShrink: '5' }}
                        variant='filled'
                        label='State'
                        type='text'
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                    />
                    <TextField
                        style={{ display: 'flex', flexShrink: '0' }}
                        variant='filled'
                        label='Zip Code'
                        type='text'
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <AuthSubmitButton>Sign Up</AuthSubmitButton>
            </form>
        </div>
    )
}