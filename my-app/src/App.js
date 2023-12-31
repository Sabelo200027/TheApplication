import './App.css';
import { useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '.home/pages';

const socket = io.connect('http://localhost:4000');

function App() {
  const [username, setUsername] = useState(''); 
  const [room, setRoom] = useState('');
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
