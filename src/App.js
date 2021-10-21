
import React, { Component } from 'react'
import Nav from './componets/Nav';
import NoteList from './componets/NoteItems/ListItem/NoteList';
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="sans-serif">
          <Nav />
          <Route path="/" component={NoteList} />
          <Route path="/notesList" component={NoteList} />
        </div>
      </BrowserRouter>

    )
  }
}
