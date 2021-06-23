setImmediate(() => {
    console.log('immdediate');
});

process.nextTick(() => {
    console.log('nextTick');
});

setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

// process.nextTick은 setImmediate나 setTimeout보다 먼저 실행
// Promise도 nextTick처럼 다른 콜백들보다 우선시

// result

// nextTick
// promise
// timeout
// immdediate
