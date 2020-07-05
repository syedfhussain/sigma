import React, { Component } from 'react';
import SpotifyLogin from './components/SpotifyLogin';
import PlaylistsTable from './components/PlaylistsTable'
import Dashboard from './components/Dashboard'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import { getAuthorizeUrl, setTokens } from './functions/authorization'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={()=><SpotifyLogin authorize={getAuthorizeUrl} />} />
          <Route path="/playlists" render={()=><PlaylistsTable setTokens={setTokens}/>} />
          <Route path="/dashboard" render={()=><Dashboard />} />
        </div>
      </Router>
    )
  }
}