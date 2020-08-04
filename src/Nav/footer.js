import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import TokenService from "../Services/token-service";
import LoginContext from "../Context/loginContext";

export default class Footer extends Component {
    static contextType = LoginContext;

    handleLogout = () => {
        TokenService.clearAuthToken();
        TokenService.clearUserId();
        this.context.handleLoginState(false);
        this.context.handleRegisteredState(false);
      };

    renderLogin() {
        return (
            <Link to={"/"}>
            <div>Login</div>
            </Link>
        );
    }

    renderLogout() {
        return (
            <Link onClick={this.handleLogout} to={"/"}>
            <div>Logout</div>
            </Link>
        );
    }

    renderRecipeName() {
        let name = "My";
        if (this.context.nickname) {
            name = `${this.context.nickname}'s`;
        }
        return <div className="name-recipes">{`${name} Recipes`}</div>;
    }

    render() {
        return (
            <>
            <footer className="footer">
                <div className="footer-list">
                <Link to={"/recipes"}>
                    <div>Recipes</div>
                </Link>
                <Link to={"/my-recipes/:user_id"}>{this.renderRecipeName()}</Link>
                {this.context.loggedIn ? this.renderLogout() : this.renderLogin()}
                </div>
            </footer>
            </>
        );
    }
}