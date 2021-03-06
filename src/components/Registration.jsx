import React from 'react';
import logo from '../images/logo.svg';
import RegistrationForm from "./RegistrationForm";
import { connect } from "react-redux"
import LoginNotification from "./LoginNotification";
import {PropTypes} from "prop-types";
import '../css/Starting-page.css';
import '../css/Side-section.css';

class Registration extends React.Component {
  
  render() {
    return (
      <div  className="Starting-page">
        <section className="Side-section">
          <img src={logo}  className="Side-section__logo" alt='logo'/>
        </section>
        <main className="Starting-page__main-block">
          {this.props.isLoggedIn 
          ? (
            <LoginNotification/>
            ) 
          : (
            <RegistrationForm/>
          )}
        </main>
      </div>
    )
  }
}

Registration.propTypes = {
  isLoggedIn: PropTypes.bool,
}


export default connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(Registration);