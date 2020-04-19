import React from 'react';
import './App.css';
import Header from './Header'
import MessageList from './MessageList'

const App = ({onLogout}) => {
  return (
    <main>
      <Header onLogout={onLogout} />
      <MessageList />
    </main>
  );
}

export default App;
