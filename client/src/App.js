import React, { useEffect } from "react";
import "./App.css";
import API from "./utils/API";
import Navbar from "./component/Navbar/Navbar";
function App() {
  //express server api route test (user info)
  //data from mongoDB will be displayed on the console
  useEffect(() => {
    API.getEmployee()
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
