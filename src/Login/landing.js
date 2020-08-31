import React, { Component } from "react";
import AuthApiService from "../Services/auth-api-service";
import TokenService from "../Services/token-service";
import LoginContext from "../Context/loginContext";
import "./landing.css";
import GridLoader from "react-spinners/GridLoader";

export default class Landing extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
    onRegistrationSuccess: () => {},
  };

  static contextType = LoginContext;

  state = {
    error: null,
    loading: false,
  };

  openTab(e) {
    let tabName = e.currentTarget.value;
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace("active", "");
    }

    document.getElementById(tabName).style.display = "block";
    e.currentTarget.className += "active";
  }

  handleSubmit = (e) => {
    this.setState(
      {
        error: null,
        loading: true,
      },
      this.handleSubmitJwtAuth(e)
    );
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();

    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.user_id);
        this.context.saveNickname(res.nickname);
        this.props.onLoginSuccess();
        this.context.handleLoginState(true);
        this.props.history.push("/cabinet");
      })
      .catch((res) => {
        this.setState({ error: res.error, loading: false });
      });
  };

  handleRegisterSubmit = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password, nickname } = e.target;

    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      nickname: nickname.value,
    })
      .then((user) => {
        user_name.value = "";
        password.value = "";
        nickname.value = "";
        this.props.onRegistrationSuccess();
        this.context.handleRegisteredState(true);
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
    //this.handleLoginAfterRegister(user_name.value, password.value)
  };

  handleLoginAfterRegister = (user_name, password) => {
    AuthApiService.postLogin({
      user_name,
      password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);
        this.props.onLoginSuccess();
        this.props.history.push("/cabinet");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    document.getElementsByClassName("tabLinks")[0].click();
  }

  render() {
    const { error, loading } = this.state;
    const { registered } = this.context;
    return (
      <main className="landing-main">
        {loading && (
          <div className="loading-screen">
            <GridLoader size={15} color={"#067368"} loading={loading} />
          </div>
        )}
        <div className="tab">
          <button
            className="tabLinks"
            id="defaultOpen"
            value="Login"
            onClick={this.openTab}
          >
            Login
          </button>
          <button className="tabLinks" value="Register" onClick={this.openTab}>
            Register
          </button>
        </div>
        <div id="Login" className="tabContent">
          <h3>Login</h3>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div role="alert">{error && <p className="error">{error}</p>}</div>
            <div className="user_name">
              <label htmlFor="login-form-user_name">User Name:</label>
              <input
                type="text"
                name="user_name"
                id="login-form-user_name"
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="login-form-password">Password:</label>
              <input
                type="password"
                name="password"
                id="login-form-password"
                required
              ></input>
            </div>
            <button type="submit">Login</button>
          </form>

          <div className='white'>
           
            <p>Username: user66 password: 12345678aA</p>
            <hr/>
            <h2>Hello and welcome to your recipe app!</h2>
            <p>
            The recipe app is a personal cooking assistant. You can add your favorite and current ingredients in your liquor cabinet to your digital cabinet, and the app will show you what recipes you can make with your ingredients and how! You will also be able to search for recipes by ingredient type and make a shortlist of your favorite ones to try later.
            This is perfect for those who need help figuring out what to do with the food in their kitchen or for those just eager to discover new recipes.
            </p>

            <hr/>
            
            <h2>How It Works:</h2>
            <ol>
                <li>
                Once Logged in you'll be sent your Cabinet, this is where you'll add and store your ingredients. From here you can access your entire favorite recipes list, as well as a shortlist below where it shows you which favorites you can make based off of the ingredients currently in your cabinet.
                </li>
                <li>
                The recipes page can search by name of recipe, or ingredient type, displaying all the recipes in the database that fit the parameters.
                </li>
                <li>
                After finding a recipe you would like, you can follow the instructions to make it, or save it to your favorites to make later
                </li>
                <li>
                If you're interested in making some recipes of your own and want a place to keep them, you can view and add your own custom recipes. Just type in the name, ingredients, recipe type, and preperation instructions and it will be saved to our database for you to view anytime.
                </li>
            </ol>
            <hr />
            <p>Click Signup to create an account and get started!</p>
        </div>
        </div>

        <div id="Register" className="tabContent">
          <h3>Register</h3>
          <form className="register-form" onSubmit={this.handleRegisterSubmit}>
            <div role="alert">
              {error && <p className="error">{error}</p>}
              {registered && (
                <p className="registered-alert">Account Created!</p>
              )}
            </div>
            <div className="user_name">
              <label htmlFor="register-form-user_name">User Name:</label>
              <input
                type="text"
                name="user_name"
                id="register-form-user_name"
                required
              ></input>
            </div>
            <div className="password">
              <label htmlFor="register-form-password">Password:</label>
              <input
                type="password"
                name="password"
                id="register-form-password"
                required
              ></input>
            </div>
            <div className="nickname">
              <label htmlFor="register-form-nickname">Nickname:</label>
              <input
                type="text"
                name="nickname"
                id="register-form-nickname"
                required
              ></input>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </main>
    );
  }
}
