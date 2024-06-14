var 회원정보 = {
    name: "kim",
    age: 30,
    aFunc: function (x) {
        return x + 1;
    },
    bFunc: function () {
        console.log("안녕");
        return;
    },
};
회원정보.aFunc(1);
회원정보.bFunc();
var cutZero = function (x) {
    var result = x.replace(/^0+/, "");
    console.log(result, ">> cutZero");
    return result;
};
var removeDash = function (x) {
    var result = x.replace(/-/g, "");
    console.log(result, ">> removeDash");
    return Number(result);
};
cutZero("01");
removeDash("010-1234-5678");
var totalFunc = function (a, cutZero, removeDash) {
    var result = cutZero(a);
    var result2 = removeDash(result);
    console.log(result2);
    return result2;
};
totalFunc("010-1234-5678", cutZero, removeDash);
