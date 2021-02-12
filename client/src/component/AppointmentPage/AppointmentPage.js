import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import moment from "moment";
import axios from "axios";

const AppointmentPage = () => {
  const [appointments, setAppointments] = useState([]);
  const defaultDate = moment().add(1, "D").format("YYYY-MM-DD");

  useEffect(() => {
    API.getAvailAppts()
      .then((response) => {
        setAppointments(response.data);
        // createTable(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //table that holds all available appointments
  function createTable() {
    // const apptData = setAppointments((state) => {
    //   console.log("appointments state is ", state);
    //   return state;
    // });

    const table = [];

    console.log("calling availAppoints from createTable ", appointments);

    const newAppointmentArray = appointments.reduce((r, a) => {
      r[a.apptDate] = r[a.apptDate] || [];
      r[a.apptDate].push({ time: a.apptTime, id: a.id });
      return r;
    }, {});

    console.log("New Appointment Array is ", newAppointmentArray);

    for (let slots in newAppointmentArray) {
      let children = [];
      let dateHeader = slots;

      newAppointmentArray[slots].map((item) => {
        children.push(
          <li className="button is-small m-1" key={item.id}>
            {" "}
            {item.time}{" "}
          </li>
        );
        return children;
      });

      table.push(
        <ul className="box">
          <h1 className="title"> {dateHeader} </h1> {children}{" "}
        </ul>
      );
    }
    // console.log(table);
    return table;
  }

  return (
    <div className="container">
      <section className="section">
        <h1 className="title"> Available Schedules</h1>
        <div className="container">
          <div className="column is-half">
            <input type="date" name="" id="" defaultValue={defaultDate} />
          </div>
          <div className="column is-four-fifths">{createTable()}</div>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;