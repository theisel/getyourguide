import "./App.css";
import GetYourGuide from "./components/GetYourGuide";

function App() {
  return (
    <>
      <h1>
        <span>GetYourGuide</span>
        <span>+</span>
        <span>React</span>
      </h1>

      <h2>City Example</h2>

      <GetYourGuide query="city" value="200" />

      <h2>Activities Examples</h2>

      <h3>Sydney Activities (specified 5 activities)</h3>

      <GetYourGuide query="search" value="sydney" size="5" />

      <h3>Berlin Activities (default number of activities)</h3>

      <GetYourGuide query="search" value="berlin" />
    </>
  );
}

export default App;
