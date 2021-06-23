const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

// result

{
    /* <Buffer eb a6 ac eb 93 9c eb af b8 20 eb a6 ac eb 93 9c eb af b8 20 eb a6 ac eb 93 9c eb af b8 20 eb a6 ac eb 93 9c eb af b8 0d 0a eb a6 ac 
eb 93 9c eb af b8 ... 358 more bytes>
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미
리드미 리드미 리드미 리드미 */
}
