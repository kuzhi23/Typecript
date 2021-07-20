{
  //Array
  const fruits: string[] = ["토마토", "바나나"];
  const scroes: number[] = [1, 2, 3];

  //or

  const scroesTwo: Array<number> = [1, 2, 3];

  //type을 readonly로 설정하면 데이터를 수정 할수 없고 읽을 수만 있따.
  function printArray(fruits: readonly string[]) {}

  //Tuple -> 배열이지만 서로다른 Type의 데이터가 담겨있는 배열(가능하면 사용하지 않는다.)

  let student: [string, number];
  student = ["name", 1];
  student[0]; //name
  student[1]; // 123
}
