console.log(this);
console.log(this === module.exports);
console.log(this === exports);
function whatIsThis() {
    console.log('function', this === exports, this === global);
}

whatIsThis();

// 최상위 스코프에 존재하는 this는 module.exports
//  함수 선언문 내부의 this는 global 객체를 가리킵니다.

// this 값은 런타임에 결정됩니다. 컨텍스트에 따라 달라지죠.
// 코드를 엄격 모드에서 실행하면, this엔 undefined가 할당됩니다.
// 엄격 모드가 아닐 때는 this가 전역 객체를 참조
// 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져옵니다.
