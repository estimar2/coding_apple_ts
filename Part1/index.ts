type Type1 = {
  name: string;
  age: number;
  aFunc: (x: number) => number;
  bFunc: () => void;
};

let 회원정보: Type1 = {
  name: "kim",
  age: 30,
  aFunc(x) {
    return x + 1;
  },
  bFunc: () => {
    console.log("안녕");
    return;
  },
};

회원정보.aFunc(1);
회원정보.bFunc();

// ------------------------------------------

type ZeroType = (x: string) => string;

let cutZero: ZeroType = x => {
  let result = x.replace(/^0+/, "");

  console.log(result, ">> cutZero");

  return result;
};

type DashType = (x: string) => number;

let removeDash: DashType = x => {
  let result = x.replace(/-/g, "");

  console.log(result, ">> removeDash");

  return Number(result);
};

cutZero("01");
removeDash("010-1234-5678");

// ------------------------------------------

type TcutZeroType = (x: string) => string;
type TremoveDathType = (x: string) => number;

let totalFunc = (
  a: string,
  cutZero: TcutZeroType,
  removeDash: TremoveDathType,
) => {
  let result = cutZero(a);
  let result2 = removeDash(result);

  console.log(result2);

  return result2;
};

totalFunc("010-1234-5678", cutZero, removeDash);
