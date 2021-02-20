import { useState } from "react";
import HomeScreen from "./screen/home_screen";

function App() {
  const [count, setCount] = useState(0);

  const addCount = (type = "PLUS") => {
    if (type === "PLUS"){
      setCount(count+1);
    }else{
      setCount(count-1);
    }
  };

  return (
    <div>
      <HomeScreen></HomeScreen>

    <p>คุณกดปุ่มไปแล้ว {count} ครั้ง</p>
    <button onClick={() => addCount("MINUS")}>-1</button>
    <button onClick={() => addCount("PLUS")}>+1</button>
  </div>
  );
}

export default App;
