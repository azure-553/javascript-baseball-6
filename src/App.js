const { Console } = require("@woowacourse/mission-utils");
const { BaseballGame } = require("./BaseballGame.js");
const { GAME_MESSAGE, ERROR_MESSAGE, END_OPTION } = require("./constants");

class App {
  async play() {
    const baseballGame = new BaseballGame();

    // TODO : 재시작 여부를 확인하는 기능
    let rePlay = true;
    while (rePlay) {
      try {
        // 게임 시작 메서드(BaseballGame) 호출
        let result = await baseballGame.startBasballGame();
        if (!result) throw new Error(ERROR_MESSAGE.IS_START);

        const choiceEndOption = await Console.readLineAsync(
          GAME_MESSAGE.RESTART
        );
        if (choiceEndOption == END_OPTION.EXIT) break;
        else continue;
      } catch (error) {
        throw new Error(ERROR_MESSAGE.IS_START);
      }
    }
  }
}

export default App;
