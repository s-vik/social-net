import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

function App(props) {
  return (
      <div className="App">
        <Header />
        <Nav friends={props.state.sidebar.friends}/>
        <div className='App_content_wrapper'>
          <Route path='/dialogs' render={() => <Dialogs changeValueDialogsMessage={props.changeValueDialogsMessage} addMessage={props.addMessage} state={props.state.dialogsPage} />} />
          <Route path='/profile' render={() => <Profile changeValuePost={props.changeValuePost} state={props.state.profilePage} addPost={props.addPost}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  );
}
// dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages}
// posts={props.state.profilePage.posts}
export default App;
