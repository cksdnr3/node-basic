const A = require('./globalA').default;

global.message = '안녕하세요';

console.log(A());
