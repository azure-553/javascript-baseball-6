const { Console, Random } = require("@woowacourse/mission-utils");
const {
  GAME_MESSAGE,
  BASEBALL_MESSAGE,
  END_OPTION,
  ERROR_MESSAGE,
} = require("./constants");

class App {
  async play() {
    // 게임 시작 메세지 출력
    Console.print(GAME_MESSAGE.START);
    // 게임 시작 메서드(BaseballGame) 호출
    this.BaseballGame();
  }

  BaseballGame() {
    // TODO : 1~9까지 랜덤 숫자를 생성하는 기능
    // TODO : 숫자를 입력 받는 기능
    // TODO : 모든 숫자에 대해 유효한 값인지 확인하는 기능
    // TODO : 볼과 스트라이크를 계산하는 기능
  }
  
  // TODO : 비교한 결과에 대해 출력하는 기능
  // TODO : 재시작 여부를 확인하는 기능
}

const app = new App();
app.play();

export default App;
