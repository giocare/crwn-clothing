import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux'
import { setCurreentUser } from './redux/user/user.actions'


class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {

    const { setCurreentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurreentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurreentUser(userAuth)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

render(){
  return (
    <div>
      <Header  />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />

      </Switch>
    </div>
  );
}
  
}


const mapDispatchToProps = dispatch => ({
  setCurreentUser: user => dispatch(setCurreentUser(user))
})

export default connect(null, mapDispatchToProps)(App);


