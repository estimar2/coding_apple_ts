let 회원들: (number | number)[] = [1, 2, 3];

let 오브젝트: { a: string | number } = { a: "123" };

let user: string = "kim";
let age: number | undefined = undefined;
let married: boolean = false;

let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};

학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
