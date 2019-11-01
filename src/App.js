import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'


class App extends React.Component {

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsuscbribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
      } 
      
      setCurrentUser(userAuth)
    });
  }
  
  componentWillUnmount(){
    this.unsuscbribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route 
          exact path='/signin' 
          render={() => 
            this.props.currentUser ? (
              <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage /> 
              )
            }
          />
      </Switch>
      
    </div>
  );
}
}

const mpaStatetoProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchtoProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mpaStatetoProps, 
  mapDispatchtoProps
)(App);
