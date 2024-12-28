import React from 'react' ;
import './App.css';
import Header from './components/Header';
import About from './components/About';
import AboutAlgorithms from './components/AboutAlgorithms';
import Demo from './components/Demo';
import CodeDownload from './components/CodeDownload';

function App() {
  return (
    <div className="App">
     <Header />
     <About />
     <AboutAlgorithms />
     <Demo />
     <CodeDownload />
    </div>
  );
}

export default App;
