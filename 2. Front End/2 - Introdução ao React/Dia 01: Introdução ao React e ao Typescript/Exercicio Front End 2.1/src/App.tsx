import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '../../../../../../../../../../vite.svg';
import './App.css';
import Title from './components/Title';
import HelloWorld from './components/HelloWorld';

function App() {
  const [count, setCount] = useState(0);

  return (
    <HelloWorld />
  );
}

export default App;
