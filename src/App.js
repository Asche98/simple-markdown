import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TransformedText from './components/TransformedText';
import UserForm from './components/UserForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="markdown-container">
      <Header/>
      <main class="container">
        <UserForm/>
      </main>
    </div>
  );
}

export default App;
