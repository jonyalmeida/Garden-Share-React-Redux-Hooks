const fs = require('fs');

const veggies = ['lettuce', 'spinach', 'broccoli', 'squash', 'kale',
    'garlic', 'onions', 'beets', 'tomatoes', 'pumpkin', 'parsley', 'dill']

for (let i = 0; i < veggies.length; i++) {
    fs.open('products-list.txt', 'a', function (e, id) {
        fs.write(id, `{productName:"${veggies[i]}", productQty: "1lb", productDescription: "organic, fresh, farm to table yummy vegetable", sellerId: 1, vegetable: true}`
            + ",\n", null, 'utf8', function () {
                fs.close(id, function () {
                    console.log('file is updated');
                });
            });
    })
}
