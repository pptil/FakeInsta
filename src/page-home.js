import React from "react";
import insta from "./instashot.png";
import firebase from "firebase/app";
import "firebase/auth";

class Home extends React.Component {
  state = {
    user: null,
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
      if (this.state.user) {
        this.props.history.push("/feed");
      }
    });
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log("entro el mail: ", result.user.email))
      .catch((error) => console.log(error.code));
  }
  render() {
    return (
      <React.Fragment>
        <div className="container vh100">
          <div className="row ">
            <div className="col m4 l5 offset-l1 off">
              <img alt="" src={insta} />
            </div>
            <div className="col m3 l3 top120">
              <div className="card">
                <div className="card-image">
                  <span className="card-title">Card Title</span>
                </div>
                <div className="card-content center">
                  <img
                    alt="Octa"
                    className="circle homePic"
                    src="https://nintendo.pe/wp-content/uploads/2019/11/EJMd4JAUYAA6_HA-e1573588067181-656x464.png"
                  />
                  <p>
                    Bienvenidos a <strong>Truchigram</strong>, esta app# esta
                    creada para el curso de Firebase de escuela devRock para
                    mostrar un primer ejemplo del poder de esta base de datos y
                    lo fácil que resulta para arrancar a crear.
                  </p>
                </div>
                <div className="card-action right-align">
                  <button
                    className="waves-effect waves-light btn"
                    onClick={this.handleAuth}
                  >
                    Logear con Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
