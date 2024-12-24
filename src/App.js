import React from 'react' ;
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Demo from './components/Demo';
import CodeDownload from './components/CodeDownload';

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <Demo />
     <CodeDownload />
    </div>
  );
}

export default App;
