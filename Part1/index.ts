function 함수(x?: string): string {
  if (x) {
    console.log("이름이 없습니다.");
    return;
  } else {
    console.log(`안녕하세요 ${x}입니다.`);
    return;
  }
}

함수("홍길동");

function 함수2(x: number | string): number {
  console.log(x.toString().length);
  return;
}

함수2("234");

function 함수3(money: number, home: boolean, charm: string): string | void {
  let total: number = 0;

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
    return `결혼가능`;
  } else {
    console.log("결혼불가능");
  }
}

함수3(700, false, "중");
