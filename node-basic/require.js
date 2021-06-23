console.log('require는 가장 위에 오지 않아도 된다.');

module.exports = 'require is here';

require('./var');

console.log('require.cache');
console.log(require.cache);
console.log('require.main');
console.log(require.main === module);
console.log('filename');
console.log(require.main.filename);
