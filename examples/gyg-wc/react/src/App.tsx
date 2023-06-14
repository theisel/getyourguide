import "./App.css";
import GetYourGuide from "./components/GetYourGuide";

function App() {
  return (
    <article>
      <h1>
        <span>GetYourGuide</span>
        <span>+</span>
        <span>React</span>
      </h1>

      <section>
        <h2>City Example</h2>
        <GetYourGuide widget="city" query="200" />
      </section>

      <section>
        <h2>Availability</h2>
        <GetYourGuide widget="availability" query="391726" partner-id="0" />
      </section>

      <section>
        <h2>Activities Examples</h2>

        <section>
          <h3>Sydney Activities (specified 5 activities)</h3>
          <GetYourGuide widget="activities" type="search" query="sydney" size="5" />
        </section>

        <section>
          <h3>Berlin Activities (default number of activities)</h3>
          <GetYourGuide widget="activities" type="search" query="berlin" />
        </section>
      </section>
    </article>
  );
}

export default App;
