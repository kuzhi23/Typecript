{
  /**
   * JavaScript
   * Primitive(원시타입): number, string, boolean, bigint, symbol, null, undefind
   * Object: function, array....
   */

  //number type
  const num: number = 0; //타입이 number로 지정되어 숫자만 입력 가능

  //string
  const str: string = "hello"; // 타입이 string으로 지정되어 문자만 입력가능

  //boolean
  const boal: boolean = false; // 타입이 boolean으로 지정되어 true,false만 입력가능

  //undefined -> 값이 있는지 없는지 아무것도 결정 안된 상태
  let name: undefined; // undefined 타입을 지정할때는 이렇게 쓰지않고
  let age: number | undefined; // 이런식으로 쓴다.

  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  //null -> 값이 없는 상태
  let person: null; // null 도 마찬가지로 단독으로 쓰지않는다.
  let person2: string | null;

  //unknown 알수 없는 -> 가능하면 쓰지 않는 것이 좋다 다만 타입이 없는 자바스크립트를 같이 쓰기 위함이다. 다만 웬만하면 쓰지 말자
  let notSure: unknown = 0; // 어떤 종류의 데이터가 담길지 알수 없기 때문에 문자열 또는 다양한 어떤 데이터든 담을 수 있다.
  notSure = "he";
  notSure = true;

  //any -> 가능하면 쓰지 말자
  let anything: any = 0; // any를 써도 unknown과 마찬가지로 어떤 데이터은 들어올수있다. 다만 unknown은 겸손하다면 any는 당당하게 다와 이런느낌이다.
  anything = "he";

  //void ->  함수에서 아무것도 리턴하지 않으면 void이다. void인경우는 생략 가능하다.
  function print() {
    console.log("hello");
  }

  let unusable: void = undefined; // 변수에서 void로 type을 지정하면 undefined 밖에 할당 할수 없다.-> 이렇게 쓰는 적이 없다.

  //never -> 함수에서 절때 리턴되지 않을때
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message); // 어플리케이션에서 예상치 못한 핸들링 하지못하는 에러를 떤질떄
    //혹은 while(true){.. } 설정하여 계속 끝나지 않게 설정할때
  }

  //object ->  원시타입을 제외한 모든 것들이 가능하다 따라서 가능하면 쓰지 말자
  //이것도 깃허브에 서 잡힐까?
  let obj: object;
  obj = [];
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "ellie" });
}
