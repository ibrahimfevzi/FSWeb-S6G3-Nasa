import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import BiComponent from "./components/BiComponent";

function App() {
  const [apodData, setApodData] = useState();
  const [datePicker, setDatePicker] = useState(
    new Date("2022-08-21").toISOString().slice(0, 10)
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "5WrVk1C8PFzbz5syM2GRLOYjksOgVnpptJdz0CIz",
          date: datePicker,
        },
      })
      .then(function(response) {
        console.log(response);
        setApodData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
    console.log("sayfam render oldu.");
  }, [datePicker]);
  return (
    <div className="App">
      <BiComponent
        data={apodData}
        dateChange={setDatePicker}
        currentDate={datePicker}
      />
    </div>
  );
}

export default App;
