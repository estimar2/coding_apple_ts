var 제목 = document.querySelector("#title");
// narrowing 방법 1
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
// narrowing 방법 2 (가장 많이 쓰게됨)
if (제목 instanceof Element) {
    제목.innerHTML = "반가워요";
}
// narrowing 방법 3 (assertion)
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "반가워요";
// narrowing 방법 4 (?. = optional chaining 연산자 사용)
if (제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) {
    제목.innerHTML = "반가워요";
}
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) !== undefined) {
    제목.innerHTML = "반가워요";
}
// narrowing 방법 5
// tsconfig 에서 strict 모드 끄는 방법
// ------------------------------------------------
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
// ------------------------------------------------
var 버튼 = document.querySelector("#button");
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
// if(버튼 instanceof HTMLButtonElement){
//     버튼?.addEventListener('click', () => {
//     })
// }
// ------------------------------------------------
var 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement) {
    이미지.src = "./img/sync_disabled.png";
}
// ------------------------------------------------
var 모든링크 = document.querySelectorAll(".naver");
모든링크.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
