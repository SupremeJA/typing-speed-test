import "./App.css";
import MainHeader from "./components/MainHeader";
import Complete from "./section/Complete";
import Typingtest from "./section/Typingtest";

function App() {
  return (
    <section className="max-w-[90%] px-3 mx-auto">
      <MainHeader />
      <Complete />
    </section>
  );
}

export default App;
