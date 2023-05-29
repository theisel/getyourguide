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

      <GetYourGuide widget="city" cityId="200" />

      <h2>Activity Examples</h2>

      <h3>Sydney Activities (specified 5 activities)</h3>

      <GetYourGuide widget="activities" queryType="search" query="sydney" size="5" />

      <h3>Berlin Activities (default number of activities)</h3>

      <GetYourGuide widget="activities" queryType="search" query="berlin" />
    </>
  );
}

export default App;
