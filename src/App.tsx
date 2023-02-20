// built-in imports
import { useEffect, useState } from "react";

// components
import { Advice } from "./components/Advice/Advice";
import { AdvicePropType } from "./components/Advice/_";
import { MemoizedButton } from "./components/Button/Button";
import { Card } from "./components/Card/Card";
import { LoadScreen } from "./components/LoadScreen/LoadScreen";
import { Welcome } from "./components/Welcome/Welcome";

// constants and KEYS
const BROWSER_STORAGE_KEY = "react-advice-generator";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [advice, setAdvice] = useState<undefined | AdvicePropType>(undefined);

  async function handleGetQuote() {
    // user tries to get new quote when already one request is being processed
    if (isLoading) return;

    setIsLoading((prev) => !prev);
    try {
      // requesting the API server and parsing the response to JSON
      const response = await fetch(`https://api.adviceslip.com/advice`);
      const { slip } = await response.json();

      // retriving the slip_id and advice from the slip object
      // updating the advice with the response
      // storing the advice in browser storage
      const newAdvice: AdvicePropType = {
        advice: slip.advice,
        slip_id: slip.id,
      };
      sessionStorage.setItem(BROWSER_STORAGE_KEY, JSON.stringify(newAdvice));
      setAdvice(() => newAdvice);
    } catch {
      // catch block will update the advice with an invalid slipID.
      // Thus we are not working with the error object thrown by the try block
      setAdvice(() => ({
        advice: "Something went wrong! Please try again later",
        slip_id: NaN,
      }));
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const storedAdviceString = sessionStorage.getItem(BROWSER_STORAGE_KEY);
    // no stored advice found
    if (!storedAdviceString) return;

    // stored advice found in storage
    const parsedAdvice = JSON.parse(storedAdviceString) as AdvicePropType;

    // if the stored advice is corrupt or doesn't adhere to the AdvicePropType shape
    if (
      !(
        Object.hasOwn(parsedAdvice, "advice") &&
        Object.hasOwn(parsedAdvice, "slip_id")
      )
    ) {
      sessionStorage.removeItem(BROWSER_STORAGE_KEY);
      return;
    }

    // valid advice found in storage
    // update the advice state variable with the stored advice
    setAdvice(parsedAdvice);
  }, []);

  return (
    <div className="bg-neutral-3 h-auto min-h-screen grid place-items-center">
      <Card>
        {isLoading ? (
          <LoadScreen />
        ) : advice ? (
          <Advice {...advice} />
        ) : (
          <Welcome />
        )}
        <MemoizedButton
          onClickCallback={handleGetQuote}
          isLoading={isLoading}
        />
      </Card>
    </div>
  );
}

export default App;
