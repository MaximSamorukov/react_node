import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li key="key_1"><Payments /></li>,
          <li key="key_2">
            <a href="/api/logout">
              Logout
            </a>
          </li>,
        ]



    }
  }
  render() {
    const { auth } = this.props;
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Logo
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({ auth }) {
  return ({ auth });
}

export default connect(mapStateToProps)(Header);