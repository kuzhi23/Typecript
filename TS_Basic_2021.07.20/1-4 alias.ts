{
  /**
   * Type Alias
   */

  type Text = string;
  const name: Text = "kuzhi";
  const address: Text = "동대문구";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "hanjune",
    age: 1,
  };

  /**
   * String Literal Types
   */

  type Name = "name";
  let kuzhiName: Name;
  kuzhiName = "name";
  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
