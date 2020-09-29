// import React, {useState, } from 'react';

// export default function AddressForm() {

//     const address = this.getEmptyAddress();
//       this.state = {
//         'address': address,
//         'query': '',
//         'locationId': ''
//       }

//       this.onQuery = this.onQuery.bind(this);
//     }

//     onQuery(evt) {
//       const query = evt.target.value;
//       if (!query.length > 0) {
//         const address = this.getEmptyAddress();
//         return this.setState({
//           'address': address,
//           'query': '',
//           'locationId': ''
//           })
//       }

//       const self = this;
//       axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json', {
//         'params': {
//           'app_id': APP_ID_HERE,
//           'app_code': APP_CODE_HERE,
//           'query': query,
//           'maxresults': 1,
//         }}).then(function (response) {
//           const address = response.data.suggestions[0].address;
//           const id = response.data.suggestions[0].locationId;
//           self.setState({
//             'address': address,
//             'query': query,
//             'locationId': id,
//             });
//         });
//     }

//     render() {
//       return (
//         <div class="container">
//           <AddressSuggest
//             query={this.state.query}
//             onChange={this.onQuery}
//             />
//           <AddressInput
//             street={this.state.address.street}
//             city={this.state.address.city}
//             state={this.state.address.state}
//             postalCode={this.state.address.postalCode}
//             country={this.state.address.country}
//             />
//           ...
//         );
//     }
//   }