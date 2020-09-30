const fs = require('fs');

const messages = ['Do you deliver?', 'What are you to trade for?', 'What time can I come pick up?', 'Very well, thanks!', 'That sounds good!',
    'Do you have other fruits?', 'Are they organic?', `I don't use pesticides.`, `Just come by and grab 'em`, 'That looks delicious!', 'See you soon!', 'Do you have anymore onions?']

const rand = () => Math.floor(Math.random() * 6 + 1);
const randGoods = () => Math.floor(Math.random() * 13 + 1);

for (let i = 0; i < messages.length; i++) {
    fs.open('messages-data.txt', 'a', function (e, id) {
        fs.write(id, `{message:"${messages[i]}", receiverId: ${rand()}, senderId: ${rand()}, goodsId: ${randGoods()}, createdAt: new Date(), updatedAt: new Date()}`
            + ",\n", null, 'utf8', function () {
                fs.close(id, function () {
                    console.log('file is updated');
                });
            });
    })
}
