import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';
import { compose } from 'redux';
import { appInitialization } from './redux/app-reducer';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <Sidebar />
      <div className='App_content_wrapper'>
        <Switch>
          <Route path='/dialogs' render={() => <DialogsContainer />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route exact path='/' render={() => <ProfileContainer />} />
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <Login />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

const AppContainer =(props) => {
  useEffect(()=>{props.appInitialization()},[props.initialized])
    if (!props.initialized) return <Preloader />
    return <App />
}
const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { appInitialization }),
)(AppContainer);

