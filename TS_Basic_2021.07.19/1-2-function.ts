{
  //   //JavaScript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //TypeScript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //JavaScript
  //   function jsFetchNum(id) {
  //     //code ...
  //     //code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //TypeScript
  //   function tsFetchNum(id: string): Promise<number> {
  //     //code ...
  //     //code ...
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // Optional parmeter -> 항상 이름과 성을 전달하는것이아니라 이름만 전달하고싶을때 사용 즉 파라미터가 2개이상일때 전달해도되고 전달하지 않아도 될때 사용
  function printName(firstname: string, lastname?: string) {
    console.log(firstname);
    console.log(lastname);
  }
  printName("Steve", "Jobs");
  printName("Kuzhi");
  printName("Anna", undefined);

  //Optional parmeter 에서 무읖표로 써도되지만 아래 처럼 | 로 구분하게되면 두번째 파라미터를 입력하지 않아도 undefined를 꼭 명시해줘야한다.
  function printNameTwo(firstname: string, lastname: string | undefined) {
    console.log(firstname);
    console.log(lastname);
  }
  printNameTwo("hanjune", undefined);

  //Default parameter -> Optional 파라미터는 두번인자가 정해지지 않으면 undefined로 출력 되지만 Default parameter 에서는 미리지정한
  // default 값으로 출력된다.
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage();

  // Rest parameter

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(4, 5, 6));
}
