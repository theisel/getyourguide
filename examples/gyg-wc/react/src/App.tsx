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
        <h2>Location</h2>

        <article>
          <h3>Location (city)</h3>
          <GetYourGuide url="https://www.getyourguide.com/sydney-l200/">
            <a href="https://www.getyourguide.com/sydney-l200/?partner_id=0">
              Things to do in Sydney
            </a>
          </GetYourGuide>
        </article>

        <article>
          <h3>Location (country)</h3>
          <GetYourGuide url="https://www.getyourguide.com/australia-l168949/">
            <a href="https://www.getyourguide.com/australia-l168949/?partner_id=0">
              Things to do in Australia
            </a>
          </GetYourGuide>
        </article>

        <article>
          <h3>Location (with 5 items)</h3>
          <GetYourGuide url="https://www.getyourguide.com/australia-l168949/" size="5">
            <a href="https://www.getyourguide.com/australia-l168949/?partner_id=0">
              Things to do in Australia
            </a>
          </GetYourGuide>
        </article>
      </section>

      <section>
        <h2>Availability</h2>

        <article>
          <h3>Availability (default)</h3>
          <GetYourGuide url="https://www.getyourguide.com/sydney-l200/1-hour-premium-harbor-cruise-vivid-sydney-festival-t150386">
            <a href="https://www.getyourguide.com/sydney-l200/1-hour-premium-harbor-cruise-vivid-sydney-festival-t150386?partner_id=0">
              Vivid Light Festival Sydney Harbour Cruise
            </a>
          </GetYourGuide>
        </article>

        <article>
          <h3>Availability (`vertical` layout)</h3>
          <GetYourGuide
            url="https://www.getyourguide.com/sydney-l200/1-hour-premium-harbor-cruise-vivid-sydney-festival-t150386"
            layout="vertical"
          >
            <a href="https://www.getyourguide.com/sydney-l200/1-hour-premium-harbor-cruise-vivid-sydney-festival-t150386?partner_id=0">
              Vivid Light Festival Sydney Harbour Cruise
            </a>
          </GetYourGuide>
        </article>
      </section>

      <section>
        <h2>Search</h2>
        <GetYourGuide query="sydney" size="5">
          <a href="https://www.getyourguide.com/?partner_id=0">Things to do in Sydney</a>
        </GetYourGuide>
      </section>

      <section>
        <h2>Tours</h2>
        <GetYourGuide
          urls={[
            "https://www.getyourguide.com/sydney-l200/1-hour-premium-harbor-cruise-vivid-sydney-festival-t150386",
            "https://www.getyourguide.com/sydney-l200/sydney-harbour-cruise-taronga-zoo-and-sky-safari-t72927",
          ]}
        >
          <a href="https://www.getyourguide.com/sydney-l200/?partner_id=0">Book a Sydney tour</a>
        </GetYourGuide>
      </section>
    </article>
  );
}

export default App;
