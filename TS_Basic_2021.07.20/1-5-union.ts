{
  /**
   *  Union Types: OR 로 이해
   *  -> 이거 또는 저거 또는 이거 모든 가능한 케이스 중에 발생할수 있는 딱! 하나를 담을수 있는 Type을 만들고 싶을때 사용
   *  -> 스트링 리터럴을 이용 할수 있다.
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("right");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login -> success, fail
  // -> 로그인이라는 함수가 있는데 이함수는 성공할수도 있고 실패 할수있다

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // printLoginState(state)
  // success -> 성공 body
  // fail -> 실패 reason
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(state.response);
    } else {
      console.log(state.reason);
    }
  }

  const test = {
    response: {
      body: "한준",
    },
  };

  printLoginState(test);
}
