type Type2 = {
  color?: string;
  size: number;
  readonly position: number[];
};

let 숙제2: Type2;

type Type3 = {
  name: string;
  phone: number;
  email: string;
};

let 숙제3: Type3;

type Type4 = {
  check: boolean;
};

type Type34 = Type3 & Type4;

let 숙제4: Type34;
