import "./App.css";
import MainHeader from "./components/MainHeader";
import { useTyping } from "./context/TypingContext";
import Complete from "./section/Complete";
import Typingtest from "./section/Typingtest";

function App() {
  const { showComplete } = useTyping();
  return (
    <section className="max-w-[90%] px-3 mx-auto">
      <MainHeader />
      {showComplete ? <Complete /> : <Typingtest />}
    </section>
  );
}

export default App;
