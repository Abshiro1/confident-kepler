import react, { useState } from "react";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setDisplayCity(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit} className="search-form">
        <input type="search" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      {displayCity && <h2>It's 19C in {displayCity}</h2>}
    </div>
  );
}
