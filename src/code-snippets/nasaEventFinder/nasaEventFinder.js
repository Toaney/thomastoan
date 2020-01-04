import React from "react";
import axios from "axios";
import "./nasaEventFinder.scss";
// import "./styles.css";

//app component
const NasaEventFinder = () => {
  const [userInput, setUserInput] = React.useState("");
  const [inputError, setInputError] = React.useState("");
  const [events, setEvents] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  //api call
  const getEvents = () => {
    setError(false);
    setIsLoading(true);
    axios({
      url: `https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?status=open&limit=${userInput}`,
      method: "get",
      responseType: "json"
    })
      .then(res => {
        console.log(res);
        setIsLoading(false);
        setEvents(res.data.events);
        setUserInput("");
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        setError(true);
      });
  };

  //input validation
  const validateInput = () => {
    setInputError(false);
    if (0 < userInput && userInput <= 200) {
      getEvents();
    } else {
      setInputError(true);
    }
  };

  return (
    <div className="App">
      <div className="content-area">
        <h1>Nasa Event Finder</h1>
        <div className="input-container">
          <label className="input-label" htmlFor="input-number">
            <span>1. Enter a number between 1 and 20.</span>
            <br />
            <span>2. Click "Submit" to find Nasa events.</span>
          </label>
          {inputError ? (
            <p className="error-text">Please enter a number between 1 and 20.</p>
          ) : (
            ""
          )}
          <input className="input-field" id="input-number" type="number" min="1" max="5" onChange={e => setUserInput(e.target.value)} value={userInput}/>
          <button className="input-button" onClick={() => validateInput()}>Submit</button>
        </div>
        {isLoading ? <p className="loading-text">... Loading</p> : ""}
        {error ? <p className="error-text">An Error Occurred</p> : ""}
        {events ? (
          <div className="events-container">
            <p className="events-length-caption">Showing {events.length} results</p>
            {events.map((item, index) => (
              <div className="event-item">
                <h2>{item.title}</h2>
                <a href={item.link} className="event-link">{item.link}</a>
                <p>categories length: {item.categories.length}</p>
                <p>sources length: {item.sources.length}</p>
                <p>geometries length: {item.geometries.length}</p>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NasaEventFinder;
