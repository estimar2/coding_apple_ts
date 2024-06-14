function 함수(x) {
    var arr = [];
    arr[0] = x;
}
함수(123);
function 숙제(x) {
    var arr = [];
    x.forEach(function (data) {
        if (typeof data === "string") {
            arr.push(parseFloat(data));
        }
        else {
            arr.push(data);
        }
    });
    console.log(arr);
}
숙제([123, "3"]);
var 철수쌤 = { subject: "math" };
var 영희쌤 = { subject: ["science", "english"] };
var 민수쌤 = { hello: "hi" };
function 숙제2(x) {
    if (typeof x.subject === "string") {
        console.log(x.subject, ">>> string");
        return;
    }
    else if (Array.isArray(x.subject)) {
        console.log(x.subject[x.subject.length - 1], ">>> array");
        return x.subject[x.subject.length - 1];
    }
    else {
        console.log("읎다");
        return "subject 읎따";
    }
}
숙제2({ subject: ["english", "art"] });
