let i = 1;
setInterval(() => {
    if (i === 5) {
        console.log('exit!');
        process.exit();
    }

    console.log(i);
    i += 1;
}, 1000);

// process.exit(code_num)
// 실행 중인 노드 프로세스를 종료
// 서버 외의 독립적인 프로그램에서는 수동으로 노드를 멈추기 위해 사용

// 인수를 주지 않거나 0을 주면 정상 종료
//  1을 주면 비정상 종료  에러가 발생해서 종료하는 경우에는 1을 넣으면 됩니다.

// result

// 1
// 2
// 3
// 4
// 종료!
