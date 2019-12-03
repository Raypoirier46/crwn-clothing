import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
// import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';


class App extends React.Component {
  unsuscbribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
    // const { setCurrentUser } = this.props;

    // this.unsuscbribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapshot => {
    //         setCurrentUser({
    //           id: snapshot.id,
    //           ...snapshot.data()
    //         });
    //       });
    //   } 
      
    //   setCurrentUser(userAuth);
      // addCollectionAndDocuments('collections', collectionArray.map(({title, items}) => ({title, items})));
    // });
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
        <Route exact path='/checkout' component={CheckoutPage} />
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

const mpaStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

// const mapDispatchtoProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// })

const mapDispatchtoProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(
  mpaStatetoProps,
  mapDispatchtoProps
)(App);
