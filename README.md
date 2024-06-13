# TypeScript

<h6>TypeScript 설치</h6>

1. nodejs설치 (최신버전)
2. Vscode 데이터 준비
3. 터미널 오픈
   - npm install -g typescript
4. 코드짤 폴더 만들고 에디터로 폴더 오픈
5. index.ts 등 파일 생성
6. tsconfig.json 생성 후 내용 작성
   - ts -> js 컴파일시 옵션 설정 가능
7. js파일로 변환하려면
   - 에디터에서 terminal 새로 열고 tsc -w 입력해주면 자동으로 ts파일을 js파일로 변환
8. HTML파일 등에서 typescript 로 작성한 코드 사용하려면
   - .ts가 아니라 변환된 .js파일을 사용

---

<h6>typesctip 파일은 브라우저에서 인식을 못함</h6>

-> js 로 변환해서 사용
-> tsc -w 명령어 사용
-> 자동으로 js 변환됨

---

<h6>React 프로젝트에서 Typescript 사용할 경우</h6>

1. 이미 있는 react 프로젝트에 설치할 경우

```
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

2. 그냥 React 프로젝트를 새로 만들 경우

```
  npx create-react-app [프로젝트명] --template typescript
```

---

<h6>Vue 프로젝트에서 Typescript 사용할 경우</h6>

1. 작업폴더 경로에서 터미널을 오픈 후

```
  vue add typescript
```

2. 이제 vue파일에서 타입스크립트를 쓰려면

```
  <script lang='ts'>

  </script>
```

lang 옵션을 켜두고 쓰면 알아서 됨
Vue 프로젝트 내에서도 tsconfig.json파일 만들어서 설정도 자유롭게 가능

---

<h6>타입스크립트 10분 정리</h6>

```
let 이름 :string = 'kim'
```

- 변수명 :타입명
- 타입으로 쓸 수 있는 것들 : string, number, boolean, bigint, null, undefined, [], {} 등
- 타입을 지정해놓으면 타입이 의도치 않게 변경될 경우 에러메세지를 띄워줌 -> 타입관련 버그들을 사전에 찾아 없앨 수 있음
  <br/>

```
let 이름 :string[] = ['kim', 'park']
let 나이 :{ age : number } = { age : number }
```

- array, object 자료 타입 지정
  <br/>

```
let 이름 :string | number = 'kim'
```

- 여러가지 타입의 데이터가 들어올 수 있다면 | 기호를 이용해 or 연산자를 표현할 수 있음

<br/>

```
type NameType = string | number;
let 이름 :NameType = 'kim'
```

- type 키워드를 이용해 타입을 변수처럼 담아서 사용 가능

<br/>

```
type NameType = 'kim' | 'park';
let 이름 :NameType = 'kim'
```

- 원하는 글자나 숫자를 입력하면 이름이라는 변수엔 'kim'또는 'park'만 들어올 수 있음
- literal type 이라고 부름

<br/>

```
function 함수명(x :number) :number {
  return x * 2
}
```

- 함수는 파라미터와 reutrn 값이 어떤 타입일지 지정 가능
- return 타입으로 void 설정가능한데 return 이 없는지 체크할 수 있는 타입

<br/>

```
// 에러
function 함수명(x :number) {
  return x * 2
}

// 가능
function 함수명(x :number | string) {
  if (typeof x === 'number'){
    return x * 2
  }
}
```

- 변수의 타입이 확실하지 않으면 마음대로 연산할 수 없음
- 항상 타입이 무엇인지 미리 체크하는 narrowing 또는 assetion문법을 사용해야 허락해줌

<br/>

```
type Array1 = [number, boolean];
let john :Array1 = [100, false]
```

- array 자료 안에 순서를 포함해서 어떤 자료가 들어올지 지정하고 싶으면 tuple 타입을 쓰면 됨
- 대괄호 [] 안에 들어올 자료의 타입을 차례로 적어주면 됨

<br/>

```
type MyObject = {
  name? :string,
  age :number
}
let 철수 :MyObject = {
  name : 'kim',
  age : 50
}
```

- object타입도 정의가 너무 길면 type 키워드 변수에 담아 사용가능
- 특정 속성이 선택사항이면 물음표 를 기입해도 됨

<br/>

```
type MyObject = {
  [key :string] : number,
}
let 철수 :MyObject = {
  age : 50
  weight : 100,
}
```

- object안에 어떤 속성이 들어갈지 아직 모른다면 전부 타입지정도 가능
- index signature라고 함

<br/>

```
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

- class도 타입설정 가능
- 중괄호 내에 미리 변수를 만들어놔야 constructor안에서 this.name 으로 사용 가능
