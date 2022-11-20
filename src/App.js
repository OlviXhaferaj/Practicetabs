import './App.css';
import Tabs from './Components/Tabs';
import { useState } from 'react';

import { useRef, useEffect } from 'react';
import {gsap} from 'gsap'; 
import Show from './Components/Show';
function App() {



  const [message, setMessage] = useState('')
  const tabs = ['tab 1','tab 2','tab 3','tab 4','tab 5']
  return (
    <div className="App">
      {
        tabs.map((item,index) => {
          return <Tabs setMessage={setMessage} key={index} i={index} tabObject={item}/>
        })
      }
      <Show  message={message}/>
    </div>
  );
}

export default App;
