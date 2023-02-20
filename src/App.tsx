import { useState } from "react";
import { Advice } from "./components/Advice/Advice";
import { MemoizedButton } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  function handleGetQuote() {
    setIsLoading((prev) => !prev);
    console.log("get a new quote");
  }

  return (
    <div className="bg-neutral-3 h-auto min-h-screen grid place-items-center">
      <Card>
        <Advice
          slip_id={117}
          advice={`It is easy to sit up and take notice, what's difficult is getting up and taking action.`}
        />
        <MemoizedButton
          onClickCallback={handleGetQuote}
          isLoading={isLoading}
        />
      </Card>
    </div>
  );
}

export default App;
