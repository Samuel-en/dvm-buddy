import React from "react";
import {NavLink} from 'react-router-dom'

const AdminHomePage = () => {
  return (
    <div className="home-wrap">
      <div className="home-container container">
        <h2 className="home-title has-text-centered">Welcome Admin!</h2>
        <h3 className="home-subtitle has-text-centered is-uppercase">
          <strong>
           Visit your Account to see more Options <br />
           <button className="user__landing__page__button">
                <NavLink to='AppointmentEdit'>
                <img src="/images/calendar.svg" alt="veterianarian" />
                Scheduling Mange
                </NavLink>
              </button>
              <button className="user__landing__page__button">
                <NavLink to='/AdminPetServices' >
                <img src="/images/folder-management.svg" alt="pawprints" />
                  Services Manage
                  </NavLink>
              </button>
              <button className="user__landing__page__button">
              <NavLink to='/AccountManage'>
                <img src="/images/account.svg" alt="baby-sitter" />
                  Account Manage
                  </NavLink>
              </button>

          </strong>
        </h3>
      </div>
    </div>
  );
};

export default AdminHomePage;