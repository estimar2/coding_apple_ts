type CheckType = "가위" | "바위" | "보";

function 함수(a: CheckType): CheckType[] {
  let arr = [];

  arr[0] = a;

  console.log(arr, ">> arr");

  return arr;
}

함수("가위");

var 자료 = {
  name: "kim",
} as const;

function 내함수(a: "kim") {}

내함수(자료.name);
