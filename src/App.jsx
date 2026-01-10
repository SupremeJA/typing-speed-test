import "./App.css";
import MainHeader from "./components/MainHeader";
import { useTyping } from "./context/TypingContext";
import Complete from "./section/Complete";
import Typingtest from "./section/Typingtest";

function App() {
  const { complete } = useTyping();
  return (
    <section className="max-w-[90%] px-3 mx-auto">
      <MainHeader />
      {complete ? <Complete /> : <Typingtest />}
    </section>
  );
}

export default App;
