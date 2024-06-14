function 함수(x) {
    if (x) {
        console.log("이름이 없습니다.");
        return;
    }
    else {
        console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x, "\uC785\uB2C8\uB2E4."));
        return;
    }
}
함수("홍길동");
function 함수2(x) {
    console.log(x.toString().length);
    return;
}
함수2("234");
function 함수3(money, home, charm) {
    var total = 0;
    if (money) {
        total = money;
    }
    if (home) {
        total += 500;
    }
    if (charm === "상") {
        total += 100;
    }
    if (total >= 600) {
        console.log("결혼가능");
        return "\uACB0\uD63C\uAC00\uB2A5";
    }
    else {
        console.log("결혼불가능");
    }
}
함수3(700, false, "중");
