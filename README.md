# TypeScript

<h3>TypeScript 설치</h3>

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

<h3>typescript 파일은 브라우저에서 인식을 못함</h3>

-> js 로 변환해서 사용
-> tsc -w 명령어 사용
-> 자동으로 js 변환됨

---

<h3>React 프로젝트에서 Typescript 사용할 경우</h3>

1. 이미 있는 react 프로젝트에 설치할 경우

```
  npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

2. 그냥 React 프로젝트를 새로 만들 경우

```
  npx create-react-app [프로젝트명] --template typescript
```

---

<h3>Vue 프로젝트에서 Typescript 사용할 경우</h3>

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

<h3>타입스크립트 10분 정리</h3>

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
- Union Type (타입2개 이상 합친 새로운 타입만들기)

<br/>

```
type NameType = string | number;
let 이름 :NameType = 'kim'
```

- type 키워드를 이용해 타입을 변수처럼 담아서 사용 가능
- type 키워드 쓰는것 = type alias
- type 변수명 = 타입종류
  - 변수명은 관습적으로 대문자로 시작

<br/>

```
type NameType = 'kim' | 'park';
let 이름 :NameType = 'kim'
```

- 원하는 글자나 숫자를 입력하면 이름이라는 변수엔 'kim'또는 'park'만 들어올 수 있음
- literal type 이라고 부름

<br/>

```
let 이름 :any;
이름 = 123;
이름 = [];
```

- 모든 자료형 허용해줌
- 변수 타입체크 해제기능
- typescript를 쓰는 의미가 없어짐

<br/>

```
let 이름 :unknown;
이름 = 123;
```

- 모든 데이터 다 집어 넣을수 있음
- 데이터를 넣어도 타입은 그대로 unknown
- any보다 안전

<br/>

```
function 함수명(x :number) :number {
  return x * 2
}

function 함수명2(x :number) :void {
  return x * 2
}

function 함수명3(x? :number) :void {
  return x * 2
}
```

- 타입스크립트 함수는 타입지정된 파라미터 필수
- 함수는 파라미터와 reutrn 값이 어떤 타입일지 지정 가능
- return 타입으로 void 설정가능
  - return할 자료가 없는 함수의 타입으로 사용 가능
  - 실수로 뭔가 return 하는걸 사전에 막을 수 있음
- 파라미터가 옵션일 경우
  - 파라미터변수? : 타입
  - 변수? : number 는 변수 :number | undefined 랑 같음

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
function 함수명(x :number | string) {
  if(typeof x === 'string'){
    return x + '1'
  }else {
    return x + 1
  }
}
```

- type 이 하나로 확정되지 않았을 경우 Type Narrowing 써야함
- 대표적인 Narrowing 방법은 typeof 연산자
- 어떤 변수가 타입이 아직 불확실하면 if문 등으로 Narrowing 해줘야 조작 가능
- if문 썼으면 끝까지 써야 안전 else, else if 안쓰면 에러로 잡아줄수도 있음
- Narrowing으로 판정해주는 문법들 : typeof변수, 속성명 in 오브젝트자료, 인스턴스 instanceof 부모
  - 그냥 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 다 인정해줌

<br/>

```
function 함수명(x :number | string) {
  let arr :number[] = [];
  arr[0] = x as number;
}
```

- assertion 문법 : 타입 덮어쓰기
- union type 같은 복잡한 타입을 하나의 정확한 타입으로 줄이는 역할 수행
- 용도
  - Narrowing 할때 씀
  - 무슨 타입이 들어올지 100% 확실할때 씀

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
type Atype = string;
type Btype = number;

type Person = Atype | Btype
```

- union type으로 type 합치기

<br/>

```
type Atype = {x :number};
type Btype = {y :number};

type NewType = Atype & Btype

let position :NewType = { x : 10, y : 20}
```

- &연산자로 object 타입 extend하기
- Type alias & Type alias 만 가능한게 아니라 Type alias & {name : string} 이런것도 가능

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

* const 변수는 등호로 재할당만 막는 역할
  - const 로 담은 object 수정은 자유롭게 가능
    - typescript 쓰면 object자료 수정도 막을 수 있음

<br/>

```
const locate = { region : 'seoul'}
locate.region = 'busan'

type girlType = {
  readonly name : string
}
const girl :girlType = {name : 'kim'}
girl.name = 'lee'
```

- const 변수는 등호로 재할당만 막는 역할
  - const 로 담은 object 수정은 자유롭게 가능
    - typescript 쓰면 object자료 수정할때 에러 보여줌(readonly)
    - readonly는 컴파일시 에러를 내는 것일 뿐 번환된 js파일보면 잘 작동됨

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

---

<h3>tsconfig 에 들어갈 기타 항목들</h3>
대부분 건드릴 필요X, 쓸모있어보이는 것들만 추려봄
전체는 <a href='https://www.typescriptlang.org/tsconfig' >https://www.typescriptlang.org/tsconfig</a> 에서 구경 가능

```
{
 "compilerOptions": {

  "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
  "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd', 'es2015', 'esnext'
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거

  "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
  "noImplicitAny": true, //any타입 금지 여부
  "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
  "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
  "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
  "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
  "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

  "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기
 }
}
```
