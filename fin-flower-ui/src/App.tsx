import React from "react";
import Button, { ButtonSize, ButtonType } from "./components/Button/button";

const App: React.FC = () => {
  const handlderClick = () => {
    alert("事件测试");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button autoFocus onClick={handlderClick} className="fin-dddd">
          点击
        </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
          Large Primary
        </Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
          Small-Danger
        </Button>
        <Button
          btnType={ButtonType.Link}
          href="https://www.baidu.com"
          target="_blank"
        >
          Link-Baidu
        </Button>
        <Button disabled btnType={ButtonType.Link} href="https://www.baidu.com">
          Link-Baidu
        </Button>
        <Button disabled>Disable Button</Button>
      </header>
    </div>
  );
};

export default App;
