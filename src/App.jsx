import "./App.css";
import MainHeader from "./components/MainHeader";
import { useTyping } from "./context/TypingContext";
import Typingtest from "./section/Typingtest";

function App() {
  const { fetchData } = useTyping();
  fetchData("easy");
  return (
    <section className="max-w-[90%] px-3 mx-auto">
      <MainHeader />
      <Typingtest />
    </section>
  );
}

export default App;
