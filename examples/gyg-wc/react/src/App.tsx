import "./App.css";
import GetYourGuide from "./components/GetYourGuide";

function App() {
  return (
    <>
      <h1>
        <span>GetYourGuide</span>
        <span>+</span>
        <span>React</span>
        <span>+</span>
        <span>Vite</span>
      </h1>

      <h2>City Examples</h2>

      <div className="stack">
        <GetYourGuide widget="city" cityId="200" />
        <GetYourGuide widget="city" cityId="17" />
        <GetYourGuide widget="city" cityId="59" />
      </div>

      <h2>Activity Examples</h2>

      <h3>Sydney Activities (specified 5 activities)</h3>
      <div className="stack">
        <GetYourGuide widget="activity" queryType="search" query="sydney" size="5" />
      </div>

      <h3>Berlin Activities (default number of activities)</h3>
      <div className="stack">
        <GetYourGuide widget="activity" queryType="location" query="17" />
      </div>
    </>
  );
}

export default App;
