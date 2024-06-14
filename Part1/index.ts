function 함수(x: number | string) {
  let arr: number[] = [];

  arr[0] = x as number;
}

함수(123);

function 숙제(x: (number | string)[]) {
  let arr: number[] = [];

  x.forEach(data => {
    if (typeof data === "string") {
      arr.push(parseFloat(data));
    } else {
      arr.push(data);
    }
  });

  console.log(arr);
}

숙제([123, "3"]);

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { hello: "hi" };

function 숙제2(x: { subject: string | string[] }): string {
  if (typeof x.subject === "string") {
    console.log(x.subject, ">>> string");
    return;
  } else if (Array.isArray(x.subject)) {
    console.log(x.subject[x.subject.length - 1], ">>> array");
    return x.subject[x.subject.length - 1];
  } else {
    console.log("읎다");
    return "subject 읎따";
  }
}

숙제2({ subject: ["english", "art"] });
