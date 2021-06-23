const odd = '홀수';
const even = '짝수';

console.log('at var.js require.main');
console.log(require.main === module);

module.exports = {
    odd,
    even,
};
